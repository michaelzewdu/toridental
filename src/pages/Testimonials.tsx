import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  { name: "Salifou Issoufou", rating: 5, text: "I recently visited Tori Specialty Dental Clinic and had an outstanding experience with Dr. Betty. From the moment I walked in, the atmosphere was welcoming and calming. Dr. Betty took the time to listen carefully, explain every step clearly, and make sure I felt completely comfortable throughout the visit. The level of care was exceptional — gentle, thorough, and incredibly attentive. It's clear that Dr. Betty genuinely cares about patients' well‑being and goes above and beyond to ensure a positive experience. The clinic is clean, modern, and well‑organized, and the entire team is friendly and professional. I left feeling confident, informed, and well cared for. I highly recommend Dr. Betty and Tori Specialty Dental Clinic to anyone looking for excellent dental care.", link: "https://maps.app.goo.gl/YvN9XD1VtBKwKNF76" },
  { name: "Kidist M.", rating: 5, text: "The best dental experience I've ever had! Dr. Beti was so gentle and thorough. The clinic is spotless, and the staff made me feel completely at ease. My kids actually look forward to their dental visits now." },
  { name: "Dawit T.", rating: 5, text: "I had a severe toothache at 2 AM and Tori Dental was there for me. Within an hour, I was in the chair receiving treatment. Their 24/7 service is a genuine lifesaver. Thank you, Dr. Amde!" },
  { name: "Sara A.", rating: 5, text: "My zirconium crowns look absolutely natural. I can't believe how much my smile has changed. The whole process was painless and the results exceeded my expectations. Highly recommend!" },
  { name: "Yonas K.", rating: 5, text: "Professional, friendly, and incredibly skilled. I've been to many dentists in Addis, but Tori Dental is truly on another level. The modern equipment and clean environment gave me so much confidence." },
  { name: "Helen B.", rating: 5, text: "I was terrified of dentists until I came to Tori Dental. Dr. Beti took the time to explain everything and was so patient with me. I've finally found a dental clinic I trust completely." },
  { name: "Abebe G.", rating: 5, text: "My daughter needed emergency care after a playground accident. The team handled everything calmly and quickly. She was smiling again within the hour. Amazing care for children!" },
  { name: "Meron D.", rating: 5, text: "I got clear aligners here and the results are incredible. The team monitored my progress closely and adjusted the treatment perfectly. My teeth have never looked better." },
  { name: "Solomon R.", rating: 5, text: "From the warm reception to the expert treatment, every aspect of my visit was outstanding. The root canal I was dreading turned out to be completely painless. Five stars isn't enough!" },
  { name: "Tigist W.", rating: 5, text: "I bring my entire family here — from my elderly mother to my 4-year-old. Everyone receives personalized, compassionate care. Tori Dental is truly a family clinic." },
  { name: "Bereket H.", rating: 5, text: "The hygiene standards here are exceptional. You can see how seriously they take sterilization and cleanliness. Combined with their expertise, I wouldn't go anywhere else in Addis." },
];

const Testimonials = () => (
  <Layout>
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Patient Testimonials</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Don't just take our word for it — hear from the families and individuals who trust Tori Dental with their smiles.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <div className="mt-12 text-center">
        <p className="mb-4 text-muted-foreground">Ready to experience the Tori Dental difference?</p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/contact">Book Your Appointment</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
