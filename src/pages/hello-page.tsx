import { useLanguage } from "@/context/language-context";

function HelloPage() {
  const { lang } = useLanguage();
  console.log(lang);

  return (
    <>
      <h1 className="text-5xl font-bold tracking-wider p-10">Bem-vindo!</h1>
      <h1 className="text-5xl font-bold tracking-wider p-10">
        {lang == "EN" ? "Welcome!" : "Добро пожаловать!"}
      </h1>
    </>
  );
}

export default HelloPage;
