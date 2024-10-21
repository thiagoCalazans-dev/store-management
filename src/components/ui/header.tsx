import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./navigation-menu";
import { Store } from "lucide-react";

export function Header() {
  return (
    <div className="border-b flex justify-center">
      <div className="flex flex-1 h-16 items-center justify-between md:justify-start px-2  md:px-16">
        <Link to={"/dashboard"}>
          <Store />
        </Link>
        <div className="flex flex-1 items-center px-4  justify-between">
          <NavigationMenu>
            <NavigationMenuList className="flex-1 space-x-8 mx-6">
              <NavigationMenuItem>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to="/dashboard"
                >
                  <NavigationMenuLink className="w-full">
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to="/products"
                >
                  <NavigationMenuLink className="w-full">
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <ThemeToggle /> */}
          {/* <span>LOGOUT</span> */}
        </div>
      </div>
    </div>
  );
}
