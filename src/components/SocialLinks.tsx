import { Github, Linkedin, Mail, Phone } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ammar128536", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ammar-aziz112/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chammaraziz786@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+923317207711", label: "Phone" },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-accent hover:scale-110 transition-all duration-300"
          aria-label={social.label}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;