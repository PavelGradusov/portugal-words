import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={cn("hover:invert-25 duration-200", className)}
      onClick={() => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle("dark");
      }}
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </div>
    // <TooltipProvider>
    //   <Tooltip>
    //     <TooltipTrigger
    //       className={className}
    //       onClick={() => {
    //         setIsDarkMode((prev) => !prev);
    //         document.body.classList.toggle("dark");
    //       }}
    //     >
    //       {isDarkMode ? <MoonIcon /> : <SunIcon />}
    //     </TooltipTrigger>
    //     <TooltipContent>
    //       {isDarkMode ? "Enable light mode" : "Enable dark mode"}
    //     </TooltipContent>
    //   </Tooltip>
    // </TooltipProvider>
  );
}
