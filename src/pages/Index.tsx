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
  MapPin,
  MessageCircle,
} from "lucide-react";
import Layout from "@/components/Layout";
import receptionHero from "@/assets/tori-reception-3.jpg";
import receptionWelcome from "@/assets/tori-reception-1.jpg";
import receptionCta from "@/assets/tori-reception-2.jpg";

const services = [
  { icon: SmilePlus, title: "Prosthetic Tooth", desc: "State-of-the-art implant and tooth replacement options — both removable and fixed — with high patient satisfaction." },
  { icon: Stethoscope, title: "Orthodontic Treatment", desc: "Clear aligners and conventional braces with custom treatment planning for complete smile adjustment." },
  { icon: Zap, title: "Whitening & Cleaning", desc: "Professional teeth whitening and gentle cleaning to remove stains, plaque, and restore natural shine." },
  { icon: Shield, title: "Endodontic & Restorative Care", desc: "Expert root canal and restorative treatments to save natural teeth and rebuild strength and comfort." },
  { icon: Baby, title: "Pediatric Dental Care", desc: "Gentle care for growing smiles — preventive checkups and a child-friendly environment that builds confidence." },
];

const whyUs = [
  { icon: Heart, title: "Personalized Care", desc: "Every treatment plan is tailored to your unique needs and goals." },
  { icon: Shield, title: "High Quality Standards", desc: "Exceptional dental care with meticulous attention to detail." },
  { icon: Stethoscope, title: "Modern Environment", desc: "State-of-the-art equipment in a comfortable, welcoming clinic." },
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${receptionHero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/50 md:bg-foreground/45" aria-hidden="true" />
        <div className="container relative mx-auto flex min-h-[520px] flex-col items-center justify-center px-4 py-16 text-center md:py-24">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            Open 24 Hours — Addis Ababa
          </span>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            The smile you desire, and the{" "}
            <span className="text-primary">experience you deserve</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            A refined dental experience where clinical excellence meets personalized care. Your smile is our highest priority.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-background/70 backdrop-blur-sm">
              <a href="tel:+251911069547">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-background/70 backdrop-blur-sm">
              <Link to="/contact">
                <MapPin className="mr-2 h-4 w-4" />
                Visit the Clinic
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-background/70 backdrop-blur-sm">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Request a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={receptionWelcome}
              alt="Tori Speciality Dental Clinic reception and waiting area"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Welcome to Tori Dental</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to our clinic, where advanced dentistry, meticulous attention to detail, and exceptional patient care define every visit.
              It is a refined dental experience where clinical excellence meets personalized care. Your smile is our highest priority.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="container mx-auto px-4 py-16 text-center md:py-20">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Welcome to Tori Dental</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          Welcome to our clinic, where advanced dentistry, meticulous attention to detail, and exceptional patient care define every visit.
          It is a refined dental experience where clinical excellence meets personalized care. Your smile is our highest priority.
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
        <p className="mb-10 text-center text-muted-foreground max-w-2xl mx-auto">
          We are wholehearted to provide personalized, high-quality and exceptional dental care to help you attain a healthy smile in a very modern and comfortable environment.
        </p>
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
      <section className="relative overflow-hidden py-16 text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${receptionCta})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div className="container relative mx-auto flex flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Book Your Appointment?</h2>
          <p className="mb-6 max-w-xl text-primary-foreground/90">
            Whether it's a routine checkup or an emergency, we're here for you 24/7. Call us now or schedule your visit online.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/50 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10">
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
