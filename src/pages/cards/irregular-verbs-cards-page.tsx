import { useEffect, useState } from "react";
import irregularVerbsSource from "../../data/irregular-verbs.json";
import FlipCard from "@/components/ui/flip-card";
import useLanguage from "@/hooks/use-language";

type VerbType = {
  id: number;
  verb: string;
  translation: string;
  translationRu: string;
  verbForms: {
    i: string;
    you: string;
    heSheIt: string;
    we: string;
    they: string;
  };
  url: string;
};

const irregularVerbs: VerbType[] = irregularVerbsSource;

function IrregularVerbsCardsPage() {
  const { lang } = useLanguage();

  const [currentWordId, setCurrentWordId] = useState(0);

  /* DEBUG */
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const setFunc = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", setFunc);
    return () => {
      window.removeEventListener("resize", setFunc);
    };
  }, []);
  /* end DEBUG*/

  return (
    <>
      <div className="flex justify-start items-center h-full">
        <div className="h-[100%] w-full">
          {/* DEBUG */}
          <div className="ml-10">ScreenSize: {screenSize}</div>
          <div className="ml-10">
            {lang === "EN" ? "Word " : "Слово "}
            {currentWordId + 1}
            {lang === "EN" ? " from " : " из "}
            {irregularVerbs.length}
          </div>
          <div className="w-[90%] mx-auto">
            <FlipCard
              key={irregularVerbs[currentWordId].id}
              question={
                lang === "EN"
                  ? irregularVerbs[currentWordId].translation
                  : irregularVerbs[currentWordId].translationRu
              }
              answer={irregularVerbs[currentWordId].verb}
            />
          </div>
          <button
            className="px-4 py-2 rounded-2xl bg-primary mx-auto block my-4"
            onClick={() =>
              setCurrentWordId((id: number) => {
                if (id + 1 >= irregularVerbs.length) {
                  return 0;
                }
                return id + 1;
              })
            }
          >
            {lang === "EN" ? "Next" : "Следующее"}
          </button>
        </div>
      </div>
    </>
  );
}

export default IrregularVerbsCardsPage;
