import { createContext, useContext, useEffect, useState } from "react";

const storeVal = "lang";

const LanguageContext = createContext();

type Props = {
  children: React.ReactNode;
};

function LanguageProvider({ children }: Props) {
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    setLang(localStorage.getItem(storeVal) || "EN");
  }, []);

  function toggleLanguage() {
    if (lang == "EN") {
      setLang("RU");
      localStorage.setItem(storeVal, "RU");
    } else {
      setLang("EN");
      localStorage.setItem(storeVal, "EN");
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { LanguageProvider, useLanguage };
