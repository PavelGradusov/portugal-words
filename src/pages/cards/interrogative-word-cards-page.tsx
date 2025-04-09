import { Button } from "@/components/ui/button";
import FlipCard from "@/components/ui/flip-card";
import useLanguage from "@/hooks/use-language";
import { useState } from "react";

import interrogativeWordsSource from "../../data/interrogative-words.json";
import { Separator } from "@/components/ui/separator";

interface Example {
  pt: string;
  en: string;
  ru: string;
}

interface InterrogativeWord {
  id: number;
  url: string;
  word: {
    pt: string;
    en: string;
    ru: string;
  };
  examples: Example[];
}

const interrogativeWords: InterrogativeWord[] = interrogativeWordsSource;

function InterrogativeWordCardsPage() {
  const { lang } = useLanguage();

  const [currentWordId, setCurrentWordId] = useState(0);

  const createExample = (examples: Example[]) => {
    const randomPosition = Math.floor(Math.random() * examples.length);
    const example = examples[randomPosition];

    return (
      <div className="flex flex-col gap-2 items-center text-center text-2xl">
        <span className="block"> {example.pt}</span>
        <Separator />
        <span className="block mt-2">
          {lang === "EN" ? example.en : example.ru}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-start items-center h-full">
        <div className="h-[100%] w-full">
          <div className="ml-10">
            {lang === "EN" ? "Word " : "Слово "}
            {currentWordId + 1}
            {lang === "EN" ? " from " : " из "}
            {interrogativeWords.length}
          </div>
          <div className="w-[90%] mx-auto">
            <FlipCard
              image={interrogativeWords[currentWordId].url}
              key={interrogativeWords[currentWordId].id}
              question={
                lang === "EN"
                  ? interrogativeWords[currentWordId].word.en + "?"
                  : interrogativeWords[currentWordId].word.ru + "?"
              }
              answer={interrogativeWords[currentWordId].word.pt + "?"}
              children={createExample(
                interrogativeWords[currentWordId].examples
              )}
              categoryEn="Interrogative words"
              categoryRu="Вопросительные слова"
            />
          </div>
          <div className="flex gap-8 justify-center">
            <Button
              className="my-4 w-32"
              onClick={() =>
                setCurrentWordId((id: number) => {
                  if (id === 0) {
                    return interrogativeWords.length - 1;
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
                  if (id + 1 >= interrogativeWords.length) {
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

export default InterrogativeWordCardsPage;
