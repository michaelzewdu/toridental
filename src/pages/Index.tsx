import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  Stethoscope,
  Baby,
  SmilePlus,
  Star,
  ArrowRight,
  Zap,
} from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: Zap, title: "24/7 Emergency Care", desc: "Immediate relief for dental emergencies, any time of day or night." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, kid-friendly dental care for your little ones." },
  { icon: Stethoscope, title: "Orthodontics", desc: "Clear aligners and braces for a perfectly aligned smile." },
  { icon: Shield, title: "Root Canal Treatment", desc: "Pain-free root canal therapy to save your natural teeth." },
  { icon: SmilePlus, title: "Cosmetic Dentistry", desc: "Veneers, whitening, and zirconium crowns for your dream smile." },
];

const whyUs = [
  { icon: Shield, title: "Clean & Hygienic", desc: "Strict sterilization protocols and a spotless clinic environment." },
  { icon: Heart, title: "Compassionate Doctors", desc: "Patient, caring professionals who put your comfort first." },
  { icon: Stethoscope, title: "Modern Equipment", desc: "State-of-the-art technology for precise, effective treatment." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock care — because emergencies don't wait." },
];

const testimonials = [
  { name: "Kidist M.", text: "The best dental experience I've ever had. Dr. Beti was so gentle and professional. My kids actually enjoy coming here!", rating: 5 },
  { name: "Dawit T.", text: "I had a dental emergency at 2 AM and they took care of me immediately. Truly grateful for their 24/7 service.", rating: 5 },
  { name: "Sara A.", text: "My new zirconium crowns look incredibly natural. I can't stop smiling! Highly recommend Tori Dental.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted">
        <div className="container mx-auto flex min-h-[520px] flex-col items-center justify-center px-4 py-16 text-center md:py-24">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Open 24 Hours — Addis Ababa
          </span>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            The smile you desire, and the{" "}
            <span className="text-primary">experience you deserve</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            Tori Speciality Dental Clinic — providing compassionate, professional dental care for the whole family, around the clock.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="tel:+251911069547">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="container mx-auto px-4 py-16 text-center md:py-20">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Welcome to Tori Dental</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          At Tori Speciality Dental Clinic, your comfort and health are our top priorities. Located at BMA Plaza, Gerji Mariam in Addis Ababa,
          we combine modern technology with compassionate care to deliver exceptional dental services — available 24 hours a day, 7 days a week.
        </p>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Our Key Services</h2>
          <p className="mb-10 text-center text-muted-foreground">Comprehensive dental care for every member of your family</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s) => (
              <Card key={s.title} className="border-0 bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Why Choose Tori Dental?</h2>
        <p className="mb-10 text-center text-muted-foreground">Trusted by families across Addis Ababa</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <w.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">What Our Patients Say</h2>
          <p className="mb-10 text-center text-muted-foreground">Real experiences from real patients</p>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                  <p className="font-semibold text-foreground">{t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Book Your Appointment?</h2>
          <p className="mb-6 max-w-xl text-primary-foreground/80">
            Whether it's a routine checkup or an emergency, we're here for you 24/7. Call us now or schedule your visit online.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+251911069547">
                <Phone className="mr-2 h-4 w-4" />
                +251 91 106 9547
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
