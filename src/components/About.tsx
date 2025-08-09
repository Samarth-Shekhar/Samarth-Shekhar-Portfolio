import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "JavaScript", "Python", "Java", "C#", "React", "Node.js", 
    "Express.js", "MongoDB", "MySQL", "Git", "GitHub", "HTML5", "CSS3"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent">01.</span> About Me
          </h2>
          <div className="h-px bg-muted flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Samarth Shekhar, a passionate full-stack developer currently pursuing 
                B.Tech in Information Technology at Amity University. My journey into web development 
                started during my college years, and I've been passionate about creating digital 
                solutions ever since.
              </p>
              
              <p>
                I specialize in building exceptional digital experiences with a focus on MERN stack 
                development, AI integration, and automation. I enjoy turning complex problems into 
                simple, beautiful and intuitive applications.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, working on innovative 
                projects, or contributing to the developer community. I'm always eager to learn and 
                take on new challenges that push my boundaries.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Technologies I work with:</h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span className="text-sm font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <Card className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/5d46e2b4-d42f-48bb-a80b-e75fd0478522.png"
                    alt="Samarth Shekhar"
                    className="w-full h-[400px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
            
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;