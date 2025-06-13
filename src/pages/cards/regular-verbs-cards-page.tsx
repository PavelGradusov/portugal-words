import FlipCard from "@/components/ui/flip-card";
import useLanguage from "@/hooks/use-language";
import { useState } from "react";
import regularVerbsSource from "../../data/regular-verbs.json";
import { Button } from "@/components/ui/button";
import VerbFormTable, { VerbForms } from "@/components/ui/verb-form-table";
import regularVerbRules from "../../data/regular-verb-rules.json";
import shuffleArray from "@/utils/shuffle";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface VerbType {
  id: number;
  verb: string;
  translate: string;
  translateRu: string;
  type: string;
  url: string;
}

type RuleType = {
  group: string;
  verbPostfixForms: VerbForms;
};

const rules: RuleType[] = regularVerbRules;
const regularVerbsSrc: VerbType[] = regularVerbsSource;
const regularVerbs: VerbType[] = shuffleArray(regularVerbsSrc);

function RegularVerbsCardsPage() {
  const { lang } = useLanguage();

  const [currentWordId, setCurrentWordId] = useState(0);
  const [backDirection, setBackDirection] = useState(() => {
    return localStorage.getItem("backDirection") === "true";
  });

  const handleChangeDirection = () => {
    localStorage.setItem("backDirection", String(!backDirection));
    setBackDirection(!backDirection);
  };

  const prepare = (verb: string, postfix: string): string => {
    return verb.slice(0, -2) + postfix;
  };

  const getPostfix = (type: string, pName: keyof VerbForms): string => {
    const rule = rules.find((r) => r.group === type);
    if (!rule) return ""; // Если правило не найдено, возвращаем пустую строку
    return rule.verbPostfixForms[pName as keyof VerbForms] || "";
  };

  function createVerbForms(verb: VerbType) {
    const verbForm: VerbForms = {
      i: prepare(verb.verb, getPostfix(verb.type, "i")),
      you: prepare(verb.verb, getPostfix(verb.type, "you")),
      heSheIt: prepare(verb.verb, getPostfix(verb.type, "heSheIt")),
      we: prepare(verb.verb, getPostfix(verb.type, "we")),
      they: prepare(verb.verb, getPostfix(verb.type, "they")),
    };
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
              {regularVerbs.length}
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
              image={regularVerbs[currentWordId].url}
              key={regularVerbs[currentWordId].id}
              question={
                lang === "EN"
                  ? regularVerbs[currentWordId].translate
                  : regularVerbs[currentWordId].translateRu
              }
              answer={regularVerbs[currentWordId].verb}
              children={createVerbForms(regularVerbs[currentWordId])}
              categoryEn="Regular verbs"
              categoryRu="Правильные глаголы"
              backDirection={backDirection}
            />
          </div>
          <div className="flex gap-8 justify-center">
            <Button
              className="my-4 w-32"
              onClick={() =>
                setCurrentWordId((id: number) => {
                  if (id === 0) {
                    return regularVerbs.length - 1;
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
                  if (id + 1 >= regularVerbs.length) {
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

export default RegularVerbsCardsPage;
