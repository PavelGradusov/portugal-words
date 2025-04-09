import FlipCard from "@/components/ui/flip-card";
import useLanguage from "@/hooks/use-language";
import { useState } from "react";
import regularVerbsSource from "../../data/regular-verbs.json";
import { Button } from "@/components/ui/button";
import VerbFormTable, { VerbForms } from "@/components/ui/verb-form-table";
import regularVerbRules from "../../data/regular-verb-rules.json";

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
const regularVerbs: VerbType[] = regularVerbsSource;

function RegularVerbsCardsPage() {
  const { lang } = useLanguage();

  const [currentWordId, setCurrentWordId] = useState(0);

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
          <div className="ml-10">
            {lang === "EN" ? "Word " : "Слово "}
            {currentWordId + 1}
            {lang === "EN" ? " from " : " из "}
            {regularVerbs.length}
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
