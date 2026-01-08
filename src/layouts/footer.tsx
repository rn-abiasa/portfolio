import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card w-full py-10 p-5 border-t border-border bg-background sm:px-16">
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="text-lg font-bold tracking-tight">Abiasa</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Thank you for visiting my website.
          </p>
        </div>
        <div className="flex gap-5">
          <a href="">
            <Github size={16} />
          </a>
          <a href="">
            <Linkedin size={16} />
          </a>
          <a href="">
            <Instagram size={16} />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Abiasa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
