import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent">04.</span> Get In Touch
          </h2>
        </div>

        <div className="space-y-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-accent">Let's Work Together</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm currently looking for new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground text-sm">samarthshekharmj@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-muted-foreground text-sm">+91 9650754538</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground text-sm">India</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12"
              onClick={() => window.location.href = 'mailto:samarthshekharmj@gmail.com'}
            >
              Say Hello
            </Button>

            <div className="flex items-center justify-center space-x-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;