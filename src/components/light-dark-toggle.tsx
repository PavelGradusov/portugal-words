import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const storeVal = "lightMode";

export function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(storeVal) != null) {
      document.body.classList.remove("dark");
    }
    setIsDarkMode(document.body.classList.contains("dark"));
  }, []);

  const handleChangeMode = (newVal: boolean) => {
    setIsDarkMode(newVal);
    if (newVal) {
      localStorage.removeItem(storeVal);
    } else {
      localStorage.setItem(storeVal, "true");
    }
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className={cn("hover:invert-25 duration-200", className)}
      onClick={() => {
        handleChangeMode(!isDarkMode);
      }}
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}
