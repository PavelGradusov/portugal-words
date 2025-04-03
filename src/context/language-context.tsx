import { createContext, useEffect, useState } from "react";

const storeVal = "lang";

type RetProps = {
  lang: string;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<RetProps>({
  lang: "EN",
  toggleLanguage: () => {},
});

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

export { LanguageProvider };
