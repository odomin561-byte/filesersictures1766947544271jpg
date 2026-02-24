import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, message } = await req.json();

    // Validate inputs
    if (!phone && !email) {
      throw new Error('Phone or email is required');
    }
    if (phone && phone.length > 20) throw new Error('Phone too long');
    if (email && email.length > 255) throw new Error('Email too long');
    if (message && message.length > 1000) throw new Error('Message too long');

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const chatId = Deno.env.get('TELEGRAM_CHAT_ID');

    // Send to Telegram
    if (botToken && chatId) {
      const telegramMessage = `
📬 *Новая заявка с сайта*

👤 *Имя:* ${name || 'Не указано'}
📞 *Телефон:* ${phone || 'Не указан'}
${email ? `📧 *Email:* ${email}` : ''}
${message ? `💬 *Сообщение:* ${message}` : ''}
      `.trim();

      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        }
      );
    }

    // Send email via Resend if configured
    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (resendKey) {
      const htmlBody = `
        <h2>Новая заявка с сайта PearlElegance</h2>
        <p><strong>Телефон:</strong> ${phone || 'Не указан'}</p>
        <p><strong>Email:</strong> ${email || 'Не указан'}</p>
        ${message ? `<p><strong>Сообщение:</strong> ${message}</p>` : ''}
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'PearlElegance <onboarding@resend.dev>',
          to: ['at144@yandex.ru'],
          subject: `Новая заявка с сайта${phone ? ` — ${phone}` : ''}`,
          html: htmlBody,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
