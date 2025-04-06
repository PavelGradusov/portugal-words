import useLanguage from "@/hooks/use-language";
import UseScreenSize from "@/hooks/use-screen-size";

function HelloPage() {
  const { lang } = useLanguage();

  const { screenSize } = UseScreenSize();
  console.log("Screen size: " + screenSize);

  return (
    <>
      <h1 className="text-5xl font-bold tracking-wider p-10">Bem-vindo!</h1>
      <h1 className="text-3xl font-bold tracking-wider pl-30">
        {lang == "EN" ? "Welcome!" : "Добро пожаловать!"}
      </h1>
    </>
  );
}

export default HelloPage;
