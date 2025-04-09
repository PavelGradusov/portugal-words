import useLanguage from "@/hooks/use-language";
import MenuItem from "./menu-item";
import { Separator } from "./separator";

function Menu() {
  const { lang } = useLanguage();

  return (
    <nav className="flex flex-col min-h-[calc(100vh-6.5rem)] p-4 overflow-y-auto">
      <h1 className="uppercase mx-auto my-1 tracking-widest font-bold">
        {lang === "EN" ? "Rules" : "Правила"}
      </h1>
      <MenuItem href="/rules/irregular">
        {lang === "EN" ? "Irregular verbs" : "Неправильные глаголы"}
      </MenuItem>
      <MenuItem href="/rules/regular-rules">
        {lang === "EN"
          ? "Regular verb rules"
          : "Правила для правильных глаголов"}
      </MenuItem>
      <MenuItem href="/rules/regular">
        {lang === "EN" ? "Regular verbs" : "Правильные глаголы"}
      </MenuItem>
      <MenuItem href="/rules/interrogative">
        {lang === "EN" ? "Interrogative words" : "Вопросительные слова"}
      </MenuItem>

      <Separator className="mt-4" />

      <h1 className="uppercase mx-auto my-2 tracking-widest font-bold">
        {lang === "EN" ? "Cards" : "Карточки"}
      </h1>
      <MenuItem href="/cards/irregular">
        {lang === "EN" ? "Irregular verbs" : "Неправильные глаголы"}
      </MenuItem>
      <MenuItem href="/cards/regular">
        {lang === "EN" ? "Regular verbs" : "Правильные глаголы"}
      </MenuItem>
      <MenuItem href="/cards/interrogatives">
        {lang === "EN" ? "Interrogative words" : "Вопросительные слова"}
      </MenuItem>
      <MenuItem href="/cards/words-1">
        {lang === "EN"
          ? "Greetings and daily expressions"
          : "Приветствия и повседневные выражения"}
      </MenuItem>
      <MenuItem href="/cards/words-2">
        {lang === "EN"
          ? "Personal pronouns and prepositions"
          : "Личные местоимения и предлоги"}
      </MenuItem>
      <MenuItem href="/cards/words-3">
        {lang === "EN" ? "Family and People" : "Семья и люди"}
      </MenuItem>
      <MenuItem href="/cards/words-4">
        {lang === "EN" ? "Food and Drinks" : "Еда и напитки"}
      </MenuItem>
      <MenuItem href="/cards/words-5">
        {lang === "EN" ? "Numbers and time" : "Цифры и время"}
      </MenuItem>
      <MenuItem href="/cards/words-6">
        {lang === "EN" ? "Days of the Week and Months" : "Дни недели и месяцы"}
      </MenuItem>
      <MenuItem href="/cards/words-7">
        {lang === "EN" ? "Transport and Travel" : "Транспорт и путешествия"}
      </MenuItem>
      <MenuItem href="/cards/words-8">
        {lang === "EN" ? "Home and daily life" : "Дом и быт"}
      </MenuItem>
      <MenuItem href="/cards/words-9">
        {lang === "EN"
          ? "Colors, adjectives, and characteristics"
          : "Цвета, прилагательные и характеристики"}
      </MenuItem>
      <MenuItem href="/cards/words-10">
        {lang === "EN"
          ? "Nature and environment"
          : "Природа и окружающая среда"}
      </MenuItem>
    </nav>
  );
}

export default Menu;
