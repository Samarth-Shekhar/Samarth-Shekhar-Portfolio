import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=samarthshekharmj@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 fade-in-up">
          <div className="space-y-4">
            <p className="text-accent font-mono text-lg">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="hero-gradient">Samarth Shekhar</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I'm a passionate full-stack developer with hands-on experience in AI, automation, and MERN stack
            projects. Currently focused on creating innovative web applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => scrollToSection("projects")}
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://github.com/Samarth-Shekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/samarth-shekhar-185ba311a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="floating-animation">
          <div className="code-editor">
            <div className="code-header">
              <div className="code-dot red"></div>
              <div className="code-dot yellow"></div>
              <div className="code-dot green"></div>
              <span className="text-sm text-muted-foreground ml-2">developer.js</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="space-y-1">
                <div>
                  <span className="syntax-keyword">const</span>
                  <span className="text-foreground"> developer = </span>
                  <span className="text-accent">&#123;</span>
                </div>
                <div className="pl-4">
                  <span className="syntax-property">name:</span>
                  <span className="syntax-string">'Samarth Shekhar'</span>,
                </div>
                <div className="pl-4">
                  <span className="syntax-property">skills:</span>
                  <span className="text-accent">[</span>
                  <span className="syntax-string">'JavaScript'</span>,
                  <span className="syntax-string">'Python'</span>,
                  <span className="syntax-string">'React'</span>
                  <span className="text-accent">]</span>,
                </div>
                <div className="pl-4">
                  <span className="syntax-property">passion:</span>
                  <span className="syntax-string">'Building amazing things'</span>,
                </div>
                <div className="pl-4">
                  <span className="syntax-property">location:</span>
                  <span className="syntax-string">'India'</span>
                </div>
                <div>
                  <span className="text-accent">&#125;;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
