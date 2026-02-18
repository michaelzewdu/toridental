import Layout from "@/components/Layout";
import { Heart, Shield, Eye, Target, Stethoscope, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">About Tori Dental</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          At Tori Speciality Dental Clinic, we believe everyone deserves a healthy, confident smile.
          Our patient-centered approach combines advanced technology with genuine compassion.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-0 shadow-md">
          <CardContent className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide accessible, high-quality dental care to every patient in Addis Ababa and beyond.
              We are committed to using the latest techniques and technology to deliver painless, effective treatments
              in a warm and welcoming environment — available 24 hours a day, 7 days a week.
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and preferred dental clinic in Ethiopia — known for exceptional patient
              experiences, clinical excellence, and a genuine commitment to community oral health education and prevention.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Philosophy */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Patient-Centered Care</h2>
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
          Every decision we make starts with our patients. From the moment you walk through our doors,
          you'll experience a level of care and attention that sets us apart. We listen, we explain,
          and we work together to find the best treatment plan for your unique needs.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Heart, title: "Compassion First", desc: "We treat every patient with empathy, patience, and respect." },
            { icon: Stethoscope, title: "Clinical Excellence", desc: "Our doctors pursue continuing education to stay at the forefront of dentistry." },
            { icon: Sparkles, title: "Comfort & Safety", desc: "A calming environment with strict hygiene standards for your peace of mind." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Doctors */}
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Meet Our Doctors</h2>
      <p className="mb-10 text-center text-muted-foreground">Experienced, caring professionals dedicated to your smile</p>
      <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
        {[
          {
            name: "Dr. Bethlehem (Dr. Beti)",
            role: "Lead Dentist & Founder",
            bio: "With years of experience in general and cosmetic dentistry, Dr. Beti is passionate about creating beautiful, healthy smiles. Known for her gentle approach and meticulous attention to detail, she ensures every patient feels comfortable and well-cared for.",
          },
          {
            name: "Dr. Amde",
            role: "Dental Specialist",
            bio: "Dr. Amde brings expertise in orthodontics and restorative dentistry to Tori Dental. His calm demeanor and thorough approach make even the most nervous patients feel at ease. He is committed to using the latest techniques for optimal outcomes.",
          },
        ].map((doc) => (
          <Card key={doc.name} className="border-0 shadow-md overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary text-3xl font-bold">
                {doc.name.charAt(4)}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground">{doc.name}</h3>
              <p className="mb-3 text-sm font-medium text-primary">{doc.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{doc.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Hygiene */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <Shield className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h2 className="mb-4 text-3xl font-bold text-foreground">Hygiene & Technology</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          We maintain the highest sterilization and infection control standards. Our clinic is equipped with
          digital X-rays, modern dental chairs, and advanced diagnostic tools — ensuring precise, safe,
          and comfortable treatment for every patient.
        </p>
        <Button asChild className="mt-8 rounded-full" size="lg">
          <Link to="/contact">Schedule a Visit</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;
