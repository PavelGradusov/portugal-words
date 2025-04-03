import { cn } from "@/lib/utils";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DrawerContext } from "./drawer";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
  const { onClose } = useContext(DrawerContext);

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "block p-2 hover:bg-secondary rounded-md text-muted-foreground hover:text-foreground",
          isActive &&
            "bg-primary hover:bg-primary hover:text-primary-foreground text-primary-foreground"
        )
      }
      onClick={onClose}
    >
      {children}
    </NavLink>
  );
}
