import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";

export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw Error("DarkModeContext was used outside of DarkModeProvider");

  const { lang, toggleLanguage } = context;

  return { lang, toggleLanguage };
}
