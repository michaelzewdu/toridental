import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLight from "@/assets/logo-light.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logoLight} alt="Tori Speciality Dental Clinic" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+251911069547" className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            +251 91 106 9547
          </a>
          <Button asChild className="rounded-full">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.path ? "text-primary bg-muted" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="tel:+251911069547"
                className="flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-sm font-medium text-primary"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <Button asChild className="rounded-full" onClick={() => setMobileOpen(false)}>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
