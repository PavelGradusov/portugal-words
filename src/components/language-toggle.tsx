import useLanguage from "@/hooks/use-language";

function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <div
      className="border-4 rounded-md py-1 px-2 border-gray-300 dark:border-gray-700 hover:invert-25 duration-200 select-none cursor-pointer"
      onClick={toggleLanguage}
    >
      {lang === "EN" ? "RU" : "EN"}
    </div>
  );
}

export default LanguageToggle;
