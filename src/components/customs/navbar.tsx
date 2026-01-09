import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-card p-5 sm:px-16">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="text-xl font-semibold">
              Abiasa | Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-6">
              <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </a>
              <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Experience
              </a>
              <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Certificate
              </a>
              <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Projects
              </a>
            </nav>
          </div>
          <div>
            <Button variant="outline" className="hidden md:flex" asChild>
              <a href="">
                <Github />
                Repository
              </a>
            </Button>
            <div className="md:hidden">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
                  <Button variant="outline" size="icon">
                    <Menu />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuItem>
                    <a href="/" className="text-sm">
                      Home
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/" className="text-sm">
                      Experience
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/" className="text-sm">
                      Certificate
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
