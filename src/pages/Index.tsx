import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Database, 
  TestTube, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  Github,
  Linkedin
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const skills = {
    programming: ["Python", "Java", "C", "C++", "JavaScript"],
    webDev: ["HTML", "CSS", "PHP", "JavaScript"],
    design: ["Figma", "Canva", "Netbeans"],
    versionControl: ["Git", "GitHub"],
    database: ["MySQL", "MongoDB"],
    testing: ["Unit Testing", "Selenium", "JUnit"]
  };

  const projects = [
    {
      title: "Mathus Bike Shop Online Shopping App",
      stack: ["HTML", "CSS", "PHP", "SQL", "PHP-mailer"],
      description: "E-commerce platform for bike shop with online ordering system"
    },
    {
      title: "MediCare-Plus Hospital Management System",
      stack: ["Java", "PHP", "SQL", "PHP-mailer"],
      description: "Comprehensive hospital management solution"
    },
    {
      title: "SLIIT CITY UNI Moodle High-Fidelity Design",
      stack: ["Figma"],
      description: "Modern UI/UX design for university learning platform"
    },
    {
      title: "Student Attendance Management System",
      stack: ["C#", "PHP", "SQL"],
      description: "Automated attendance tracking and reporting system"
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "SLIIT Northern University",
      period: "Current"
    },
    {
      degree: "Diploma in English",
      institution: "British College, Vavuniya",
      period: "Completed"
    },
    {
      degree: "Surveying Assistant",
      institution: "Diyathalawa School",
      period: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">MM</h2>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("education")} className="text-foreground hover:text-primary transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection("education")} className="text-foreground hover:text-primary transition-colors text-left">
                Education
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors text-left">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Maninathan<br />Mathursanan
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-semibold">
                Software Engineering Undergraduate
              </h2>
              <p className="text-muted-foreground text-lg">
                Passionate about building smart digital solutions and continuously improving through hands-on projects.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  View Projects
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <img 
                  src={profilePhoto} 
                  alt="Maninathan Mathursanan" 
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in-section opacity-0">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
            <Card className="p-8 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Software Engineering undergraduate passionate about building smart digital solutions and 
                continuously improving through hands-on projects. I believe in creating technology that makes 
                a difference, combining creativity with technical expertise to solve real-world problems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="fade-in-section opacity-0">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Web Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.webDev.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Design & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Version Control</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.versionControl.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TestTube className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Testing & QA</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.testing.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="fade-in-section opacity-0">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in-section opacity-0">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in-section opacity-0">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
            <Card className="p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:mmathursanan@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                      mmathursanan@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+94772196459" className="text-lg font-medium hover:text-primary transition-colors">
                      +94 77 2196459
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-medium">Mulliyawalai, Mullaitivu</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Maninathan Mathursanan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
