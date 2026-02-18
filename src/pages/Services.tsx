import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Baby,
  SmilePlus,
  Shield,
  Zap,
  Crown,
  Scissors,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Comprehensive exams, cleanings, fillings, and preventive care to keep your smile healthy.",
    benefits: ["Regular checkups & cleanings", "Cavity detection & fillings", "Gum disease prevention", "Oral cancer screening"],
    when: "Visit every 6 months for preventive care, or when you notice tooth sensitivity, pain, or bleeding gums.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Gentle, child-friendly dental care in a warm, welcoming environment designed for kids.",
    benefits: ["Kid-friendly approach", "Fluoride treatments", "Sealants for cavity prevention", "Growth & development monitoring"],
    when: "Schedule your child's first visit by age 1 or when the first tooth appears. Regular visits every 6 months.",
  },
  {
    icon: SmilePlus,
    title: "Orthodontics (Aligners)",
    desc: "Clear aligners and modern orthodontic solutions for a beautifully aligned smile.",
    benefits: ["Nearly invisible clear aligners", "Custom treatment plans", "Comfortable & removable", "Predictable results with 3D imaging"],
    when: "If you have crooked teeth, gaps, or bite issues, schedule a consultation to explore your options.",
  },
  {
    icon: Shield,
    title: "Root Canal Treatment",
    desc: "Pain-free root canal therapy using modern techniques to save your natural tooth.",
    benefits: ["Saves natural teeth", "Virtually painless with modern anesthesia", "Prevents infection spread", "Long-lasting results"],
    when: "Seek treatment for persistent toothache, sensitivity to hot/cold, swollen gums, or a darkened tooth.",
  },
  {
    icon: Scissors,
    title: "Wisdom Tooth Extraction",
    desc: "Safe and comfortable removal of impacted or problematic wisdom teeth.",
    benefits: ["Prevents crowding & misalignment", "Eliminates pain & infection risk", "Quick recovery", "Expert surgical technique"],
    when: "If wisdom teeth cause pain, swelling, difficulty opening your mouth, or repeated infections.",
  },
  {
    icon: Crown,
    title: "Zirconium Crowns",
    desc: "Premium zirconium crowns that look, feel, and function like natural teeth.",
    benefits: ["Natural translucent appearance", "Exceptional strength & durability", "Biocompatible & stain-resistant", "Minimal tooth reduction"],
    when: "Recommended for damaged teeth, after root canals, or to replace old metal or porcelain crowns.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with veneers, teeth whitening, and aesthetic treatments.",
    benefits: ["Professional teeth whitening", "Porcelain veneers", "Smile makeovers", "Tooth reshaping & bonding"],
    when: "If you're unhappy with discolored, chipped, or unevenly shaped teeth, we can help you design your dream smile.",
  },
  {
    icon: Zap,
    title: "24/7 Emergency Dental Care",
    desc: "Immediate emergency treatment available around the clock — because emergencies don't wait.",
    benefits: ["Available 24 hours, 7 days a week", "Immediate pain relief", "Trauma & injury management", "Same-day emergency appointments"],
    when: "For severe tooth pain, knocked-out or broken teeth, uncontrolled bleeding, swelling, or facial trauma.",
  },
];

const Services = () => (
  <Layout>
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Our Services</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          From routine checkups to complex procedures, Tori Speciality Dental Clinic offers a full range
          of dental services — all under one roof, available 24/7.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        {services.map((s, idx) => (
          <Card key={s.title} className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div className="flex items-center justify-center bg-muted p-8 md:w-1/3">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-12 w-12" />
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">{s.title}</h2>
                  <p className="mb-4 text-muted-foreground">{s.desc}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Benefits</h4>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-secondary">When to Seek Treatment</h4>
                    <p className="text-sm text-muted-foreground">{s.when}</p>
                  </div>
                  <Button asChild className="rounded-full">
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
