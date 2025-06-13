import { Button } from "@/components/ui/button";
import FlipCard from "@/components/ui/flip-card";
import VerbFormTable, { VerbForms } from "@/components/ui/verb-form-table";
import useLanguage from "@/hooks/use-language";
import { useState } from "react";
import irregularVerbsSource from "../../data/irregular-verbs.json";
import shuffleArray from "@/utils/shuffle";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface VerbType {
  id: number;
  verb: string;
  translation: string;
  translationRu: string;
  verbForms: VerbForms;
  url: string;
}

const irregularVerbsSrc: VerbType[] = irregularVerbsSource;
const irregularVerbs: VerbType[] = shuffleArray(irregularVerbsSrc);

function IrregularVerbsCardsPage() {
  const { lang } = useLanguage();

  const [currentWordId, setCurrentWordId] = useState(0);
  const [backDirection, setBackDirection] = useState(() => {
    return localStorage.getItem("backDirection") === "true";
  });

  const handleChangeDirection = () => {
    localStorage.setItem("backDirection", String(!backDirection));
    setBackDirection(!backDirection);
  };

  function createVerbForms(verbForm: VerbForms) {
    return <VerbFormTable verbForm={verbForm} />;
  }

  return (
    <>
      <div className="flex justify-start items-center h-full">
        <div className="h-[100%] w-full">
          <div className="flex justify-between">
            <div className="ml-10">
              {lang === "EN" ? "Word " : "Слово "}
              {currentWordId + 1}
              {lang === "EN" ? " from " : " из "}
              {irregularVerbs.length}
            </div>

            <div className="flex items-center space-x-2 mr-10">
              <Switch
                id="direction-toggler"
                checked={backDirection}
                onCheckedChange={handleChangeDirection}
              />
              <Label htmlFor="direction-toggler">
                {lang === "EN" ? "Reverse" : "Перевернуть"}
              </Label>
            </div>
          </div>

          <div className="w-[90%] mx-auto">
            <FlipCard
              image={irregularVerbs[currentWordId].url}
              key={irregularVerbs[currentWordId].id}
              question={
                lang === "EN"
                  ? irregularVerbs[currentWordId].translation
                  : irregularVerbs[currentWordId].translationRu
              }
              answer={irregularVerbs[currentWordId].verb}
              children={createVerbForms(
                irregularVerbs[currentWordId].verbForms
              )}
              categoryEn="Irregular verbs"
              categoryRu="Неправильные глаголы"
              backDirection={backDirection}
            />
          </div>
          <div className="flex gap-8 justify-center">
            <Button
              className="my-4 w-32"
              onClick={() =>
                setCurrentWordId((id: number) => {
                  if (id === 0) {
                    return irregularVerbs.length - 1;
                  }
                  return id - 1;
                })
              }
              variant="secondary"
            >
              {lang === "EN" ? "Previous" : "Предыдущее"}
            </Button>
            <Button
              className="my-4 w-32"
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
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrregularVerbsCardsPage;
