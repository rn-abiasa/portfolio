import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-card p-5">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="text-lg font-semibold">
              Abiasa
            </a>
          </div>
          <div>
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
    </>
  );
};

export default Navbar;
