import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import Social from "@/components/customs/social";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 w-full py-16 p-5 border-t border-border sm:px-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center gap-7">
          <h4 className="text-3xl font-bold text-white tracking-tight text-center">
            Let me know if you have project questions or opportunities to
            collaborate
          </h4>
          <Button className="bg-white text-black rounded-full" asChild>
            <a href="">
              Get in touch
              <MoveUpRight size={16} />
            </a>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Social icon={<Github size={16} />} link="" />
          <Social icon={<Linkedin size={16} />} link="" />
          <Social icon={<Instagram size={16} />} link="" />
        </div>
        <div className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Abiasa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
