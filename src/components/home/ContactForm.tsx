import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim() && !email.trim()) {
      toast({
        title: "Ошибка",
        description: "Укажите телефон или email",
        variant: "destructive",
      });
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast({
        title: "Ошибка",
        description: "Введите корректный email",
        variant: "destructive",
      });
      return;
    }

    if (phone.trim() && phone.trim().length > 20) {
      toast({
        title: "Ошибка",
        description: "Номер телефона слишком длинный",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: {
          name: "Заявка с сайта",
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase">
            Свяжитесь с нами
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light mt-4 mb-3">
            Оставить <span className="italic font-medium">заявку</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Укажите ваши контактные данные и мы свяжемся с вами
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-background/80 border-border/50 focus:border-rose-gold/50"
              maxLength={20}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/80 border-border/50 focus:border-rose-gold/50"
              maxLength={255}
            />
            <Textarea
              placeholder="Сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-background/80 border-border/50 focus:border-rose-gold/50 min-h-[100px]"
              maxLength={1000}
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-gold text-primary-foreground hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "hsl(var(--rose-gold))" }}
            >
              {loading ? "Отправка..." : "Оставить заявку"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
