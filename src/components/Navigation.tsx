import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <div className="flex items-center space-x-2">
            <span className="text-accent text-2xl font-bold">&lt;</span>
            <span className="text-xl font-bold">Samarth Shekhar</span>
            <span className="text-accent text-2xl font-bold">/&gt;</span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button

              onClick={() => scrollToSection("certifications")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>


          {/* Resume button */}

          {/* Resume button only */}

          <div className="flex items-center">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() =>
                window.open("/resume.pdf", "_blank", "noopener,noreferrer")
              }
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
