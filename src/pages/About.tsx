import Layout from "@/components/Layout";
import { Heart, Shield, Eye, Target, Stethoscope, Sparkles, Lightbulb } from "lucide-react";
import drBetiImg from "@/assets/dr-beti.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const coreValues = [
  { icon: Heart, title: "Patient-First Care", desc: "Every smile matters. We listen, care deeply, and deliver comfortable, personalized treatment built on trust and respect." },
  { icon: Shield, title: "Integrity in Practice", desc: "We believe in honesty, transparency, and ethical dentistry — always recommending what is best for our patients." },
  { icon: Stethoscope, title: "Clinical Excellence", desc: "Through skill, precision, and continuous learning, we strive for outstanding outcomes and lasting results." },
  { icon: Lightbulb, title: "Driven by Innovation", desc: "We embrace modern technology and forward-thinking techniques to make dental care safer, more efficient, and more enjoyable." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">About Tori Dental</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Tori Dental Clinic was founded in 2025 by Dr. Amde Ayahun and Dr. Bethlehem Kebede with a vision to deliver high-quality, patient-centered dental care. Since its establishment, the clinic has earned excellent five-star reviews for its professionalism, advanced treatments, and exceptional patient experience.
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
              Tori Dental Clinic is committed to pioneering the use of advanced dental technology while delivering precise, ethical, and patient-centered care. Our mission is to achieve exceptional clinical outcomes and the highest level of patient satisfaction through innovation, professionalism, and compassion.
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
              To become a leading international hub for advanced dental care in East Africa, recognized for clinical excellence, technological innovation, and outstanding patient experience that meets global standards.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Core Values */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Our Core Values</h2>
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
          The principles that guide everything we do at Tori Dental Clinic.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v) => (
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
      <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Meet Our Founders</h2>
      <p className="mb-10 text-center text-muted-foreground">Experienced, caring professionals dedicated to your smile</p>
      <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
        {[
          {
            name: "Dr. Amde Ayahun",
            role: "DDS, CEO, Vise Clinical Head at SPMMC",
            bio: "Dr. Amde co-founded Tori Dental Clinic, at the heart of our practice a highly committed dental surgeon and a successful clinic owner. Recognized by colleagues for exceptional clinical skill and professional integrity providing an attentive, patient centered experience. Every treatment plan is meticulously crafted to ensure superior outcomes and long term oral health for our community. With his applause on endodontic, orthodontic and surgical expertise.",
            image: null,
          },
          {
            name: "Dr. Bethlehem Kebede (Dr. Beti)",
            role: "DDS, Cosmetic and Laser Dentist, Co-Founder & Lead Dentist",
            bio: "Dr. Bethlehem co-founded Tori Dental Clinic with a vision for clinical excellence. With deep experience in general and cosmetic dentistry, she is known for her gentle approach, meticulous attention to detail, and ensuring every patient feels comfortable and well-cared for. Not to mention her long experience on pediatric (children) oral care and using child friendly language while maintaining surgical precision.",
            image: drBetiImg,
          },
        ].map((doc) => (
          <Card key={doc.name} className="border-0 shadow-md overflow-hidden">
            <div className="h-72 bg-muted flex items-center justify-center overflow-hidden">
              {doc.image ? (
                <img src={doc.image} alt={doc.name} className="h-full w-full object-cover object-top" />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary text-3xl font-bold">
                  {doc.name.charAt(4)}
                </div>
              )}
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
          digital X-rays, CBCT 3D imaging, intraoral cameras, and advanced diagnostic tools — ensuring precise, safe,
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
