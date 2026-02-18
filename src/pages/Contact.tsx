import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock, Zap } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Please fill in required fields", description: "Name and phone number are required.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Appointment Request Sent!", description: "We'll get back to you shortly. Thank you!" });
      setForm({ name: "", phone: "", email: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're here for you 24/7. Book an appointment, ask a question, or visit us at our clinic.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info & Map */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Our Location</p>
                  <p className="text-sm text-muted-foreground">BMA PLAZA 4th Floor, Gerji Mariam, Addis Ababa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+251911069547" className="text-sm text-primary hover:underline">+251 91 106 9547</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Open 24 Hours — Every Day</p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mb-6 rounded-xl bg-destructive/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Dental Emergency?</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Don't wait — call us immediately for 24/7 emergency dental care.</p>
              <Button asChild variant="destructive" className="rounded-full">
                <a href="tel:+251911069547"><Phone className="mr-2 h-4 w-4" />Call Now — Emergency</a>
              </Button>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Tori Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.8!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMDAuMCJOIDM4wrA0OCcwMC4wIkU!5e0!3m2!1sen!2set!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">Request an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+251 ..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dental concern or preferred appointment time..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting}>
                {submitting ? "Sending..." : "Send Appointment Request"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll contact you within a few hours to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
