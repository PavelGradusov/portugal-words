import { LightDarkToggle } from "@/components/light-dark-toggle";
import Menu from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="">
      <header className="h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <img
            src="/portugal-svgrepo-com.svg"
            alt="icon"
            className="w-10 m-2"
          />
          <h1 className="uppercase text-3xl">Portugal Words</h1>
        </NavLink>
        <LightDarkToggle className="border-4 rounded-md p-1 m-2 border-gray-300 dark:border-gray-700" />
      </header>
      <Separator />

      <div className="grid grid-cols-[250px_10px_1fr]">
        <Menu />
        <Separator orientation="vertical" />
        <main className="p-4">{children}</main>
      </div>

      <Separator />
      <footer className="bg-primary flex flex-col items-center justify-center py-1.5 border-border border-t-2">
        <span>&copy; PG 2025</span>
      </footer>
    </div>
  );
}

export default Layout;
