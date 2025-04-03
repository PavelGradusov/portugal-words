import useLanguage from "@/hooks/use-language";
import MenuItem from "./menu-item";
import { Separator } from "./separator";

function Menu() {
  const { lang } = useLanguage();

  return (
    <nav className="flex flex-col min-h-[calc(100vh-6.5rem)] p-4">
      <h1 className="uppercase mx-auto my-1 tracking-widest font-bold">
        {lang === "EN" ? "Rules" : "Правила"}
      </h1>
      <MenuItem href="/irregular">
        {lang === "EN" ? "Irregular verbs" : "Неправильные глаголы"}
      </MenuItem>
      <MenuItem href="/regular-rules">
        {lang === "EN"
          ? "Regular verb rules"
          : "Правила для правильных глаголов"}
      </MenuItem>
      <MenuItem href="/regular">
        {lang === "EN" ? "Regular verbs" : "Правильные глаголы"}
      </MenuItem>
      <MenuItem href="/interrogative">
        {lang === "EN" ? "Interrogative words" : "Вопросительные слова"}
      </MenuItem>
      <Separator className="mt-4" />
      <h1 className="uppercase mx-auto my-2 tracking-widest font-bold">
        {lang === "EN" ? "Cards" : "Карточки"}
      </h1>
    </nav>
  );
}

export default Menu;
