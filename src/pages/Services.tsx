import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import pediatric1 from "@/assets/pediatric-treatment-1.jpg";
import pediatric2 from "@/assets/pediatric-treatment-2.jpg";
import endodontic1 from "@/assets/endodontic-1.jpg";
import endodontic2 from "@/assets/endodontic-2.jpg";
import endodontic3 from "@/assets/endodontic-3.jpg";
import {
  Stethoscope,
  Baby,
  SmilePlus,
  Shield,
  Zap,
  Crown,
  Scissors,
  Sparkles,
  Search,
  Heart,
  Scan,
  Activity,
  Wrench,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Preventive Dentistry",
    desc: "Comprehensive preventive care to keep your smile healthy for life.",
    items: ["Oral examination / dental checkup", "Dental cleaning (scaling & polishing)", "Deep cleaning (scaling and root planing)", "Fluoride treatment", "Dental sealants", "Oral hygiene instruction", "Diet and caries-risk counseling", "Periodic recall visits"],
  },
  {
    icon: Search,
    title: "Diagnostic Procedures",
    desc: "Advanced imaging and diagnostics for precise treatment planning.",
    items: ["Clinical oral examination", "Dental X-rays (Periapical, Bitewing, Panoramic, Cephalometric)", "CBCT (3D imaging)", "Intraoral camera examination", "Pulp vitality testing", "Periodontal charting", "Oral cancer screening", "TMJ evaluation"],
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    desc: "Rebuild and restore damaged teeth to full function and beauty.",
    items: ["Dental fillings (Composite, Amalgam, Glass ionomer)", "Temporary fillings", "Inlays and onlays", "Core build-up", "Tooth reconstruction", "Post and core"],
  },
  {
    icon: Stethoscope,
    title: "Endodontics (Root Canal)",
    desc: "Protect and restore your teeth with expert endodontic care. We treat infections, save natural teeth, and rebuild strength using precise, modern techniques.",
    items: ["Root canal treatment (Single & Multi-visit)", "Re-root canal treatment", "Pulpotomy & Pulpectomy", "Apexification", "Apicoectomy (root-end surgery)", "Management of dental abscess"],
    images: [endodontic1, endodontic2, endodontic3],
  },
  {
    icon: Crown,
    title: "Prosthodontics (Tooth Replacement)",
    desc: "State-of-the-art implant and tooth replacement options — both removable and fixed — with high patient satisfaction.",
    items: ["Crowns (Metal, PFM, Zirconia, All-ceramic)", "Dental bridges", "Removable dentures (Complete, Partial, Flexible, Immediate)", "Overdentures", "Implant crowns and bridges", "Full-arch implant prosthesis (All-on-4 / All-on-6)"],
  },
  {
    icon: Scan,
    title: "Dental Implants",
    desc: "Permanent tooth replacement with advanced implant solutions.",
    items: ["Dental implant placement (Immediate & Delayed)", "Bone grafting", "Sinus lift", "Ridge augmentation", "Implant uncovering", "Implant removal", "Implant maintenance"],
  },
  {
    icon: Heart,
    title: "Periodontics (Gum Treatments)",
    desc: "Complete gum care from prevention to advanced surgical procedures.",
    items: ["Gingivitis & Periodontitis treatment", "Scaling and root planing", "Periodontal flap surgery", "Gingivectomy & Gingivoplasty", "Crown lengthening", "Bone grafting (periodontal)", "Guided tissue regeneration (GTR)", "Gum recession treatment & Soft tissue grafts"],
  },
  {
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    desc: "Expert surgical care for complex dental and facial conditions.",
    items: ["Tooth extraction (Simple & Surgical)", "Impacted wisdom tooth removal", "Surgical tooth exposure", "Cyst & Tumor removal", "Biopsy (oral lesions)", "Jaw fracture management", "Orthognathic surgery", "TMJ surgery", "Facial trauma management"],
  },
  {
    icon: SmilePlus,
    title: "Orthodontics (Teeth Alignment)",
    desc: "Clear aligners and conventional braces with custom treatment planning for complete smile adjustment and functional bite in the shortest time possible.",
    items: ["Orthodontic consultation", "Metal, Ceramic, and Lingual braces", "Clear aligners (e.g., Invisalign)", "Retainers (fixed & removable)", "Interceptive orthodontics", "Space maintainers", "Habit-breaking appliances"],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Gentle pediatric dental care designed for growing smiles. Preventive checkups, early treatments, and a child-friendly environment that builds healthy habits and confidence.",
    items: ["Pediatric dental examination", "Fluoride application", "Sealants for children", "Pediatric fillings", "Pulp therapy for primary teeth", "Stainless steel crowns", "Space maintainers", "Management of early childhood caries", "Behavior management techniques"],
    images: [pediatric1, pediatric2],
  },
  {
    icon: Sparkles,
    title: "Cosmetic / Aesthetic Dentistry",
    desc: "Brighten your smile with professional teeth whitening and aesthetic treatments. Remove stains, plaque, and restore natural shine and freshness.",
    items: ["Teeth whitening (In-office & Take-home)", "Dental veneers (Porcelain & Composite)", "Smile design / smile makeover", "Tooth reshaping (enameloplasty)", "Cosmetic bonding", "Gum contouring", "Black triangle correction"],
  },
  {
    icon: Activity,
    title: "TMJ & Occlusion Therapy",
    desc: "Diagnosis and management of jaw joint disorders and bite problems.",
    items: ["TMJ disorder evaluation", "Occlusal analysis", "Bite adjustment", "Night guards", "Splints (TMJ appliances)", "Bruxism management"],
  },
  {
    icon: Zap,
    title: "Dental Emergencies",
    desc: "Immediate emergency treatment available around the clock — because emergencies don't wait.",
    items: ["Pain management", "Dental trauma management", "Fractured tooth treatment", "Knocked-out tooth (avulsion) management", "Abscess drainage", "Emergency extractions"],
  },
  {
    icon: AlertTriangle,
    title: "Special & Advanced Procedures",
    desc: "Cutting-edge treatments for complex and specialized dental needs.",
    items: ["Full mouth rehabilitation", "Digital dentistry (CAD/CAM crowns)", "Laser dentistry", "Sedation dentistry (Oral & IV sedation)", "General anesthesia dentistry", "Geriatric dental care", "Special needs dentistry"],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-muted py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Our Services</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          From routine checkups to complex procedures, Tori Speciality Dental Clinic offers a comprehensive range
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
                  {(s as any).images ? (
                    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-1">
                      {(s as any).images.map((img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${s.title} treatment example ${i + 1}`}
                          loading="lazy"
                          className="h-40 w-full rounded-lg object-cover md:h-48"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <s.icon className="h-12 w-12" />
                    </div>
                  )}
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">{s.title}</h2>
                  <p className="mb-4 text-muted-foreground">{s.desc}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</h4>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
