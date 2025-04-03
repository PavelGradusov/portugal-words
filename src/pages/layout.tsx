import LanguageToggle from "@/components/language-toggle";
import { LightDarkToggle } from "@/components/light-dark-toggle";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Menu from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <img
            src="/portugal-svgrepo-com.svg"
            alt="icon"
            className="w-8 min-[430px]:w-10 m-2"
          />
          <h1 className="uppercase text-2xl min-[430px]:text-3xl">
            Portugal Words
          </h1>
        </NavLink>
        <div className="flex items-center">
          <LanguageToggle />
          <LightDarkToggle className="border-4 rounded-md p-1 m-2 border-gray-300 dark:border-gray-700" />

          {!isDesktop && (
            <div>
              <Drawer
                direction="right"
                open={isMobileMenuOpen}
                onOpenChange={(open) => setIsMobileMenuOpen(open)}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                <DrawerTitle />
                <DrawerTrigger className="border-4 rounded-md p-1 mr-2 border-gray-300 dark:border-gray-700 hover:invert-25 duration-200 cursor-pointer">
                  <MenuIcon size="24px" />
                </DrawerTrigger>
                <DrawerContent>
                  <Menu />
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </div>
      </header>
      <Separator />

      <div className="lg:grid lg:grid-cols-[250px_1px_1fr]">
        <div className="hidden lg:block">
          <Menu />
        </div>
        <Separator orientation="vertical" className="hidden lg:block " />
        <main className="p-4 overflow-auto min-h-[calc(100vh-6.5rem)]">
          {children}
        </main>
      </div>

      <Separator />
      <footer className="bg-primary flex flex-col items-center justify-center py-1.5 border-border border-t-2">
        <span>&copy; PG 2025</span>
      </footer>
    </div>
  );
}

export default Layout;
