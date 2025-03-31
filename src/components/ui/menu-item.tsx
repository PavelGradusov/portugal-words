import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
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
    >
      {children}
    </NavLink>
  );
}
