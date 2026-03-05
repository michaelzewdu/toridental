import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img src={logoLight} alt="Tori Speciality Dental Clinic" className="h-16 w-auto" />
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            The smile you desire, and the experience you deserve. Providing exceptional dental care in Addis Ababa, 24/7.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-background/10 p-2 hover:bg-background/20 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-background/10 p-2 hover:bg-background/20 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-background/10 p-2 hover:bg-background/20 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Testimonials", path: "/testimonials" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-background transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold">Our Services</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {["General Dentistry", "Pediatric Dentistry", "Orthodontics", "Root Canal", "Cosmetic Dentistry", "Emergency Care"].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-background transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold">Contact Us</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              BMA PLAZA 4th Floor, Gerji Mariam, Addis Ababa
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+251911069547" className="hover:text-background transition-colors">+251 911 069 547</a>
                <a href="tel:+251910297536" className="hover:text-background transition-colors">+251 910 297 536</a>
                <a href="tel:+251983333355" className="hover:text-background transition-colors">+251 983 333 355</a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              Open 24 Hours — Every Day
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Tori Speciality Dental Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
