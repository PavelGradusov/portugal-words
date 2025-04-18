import { Button } from "@/components/ui/button";
import FlipCard from "@/components/ui/flip-card";
import { Separator } from "@/components/ui/separator";
import useLanguage from "@/hooks/use-language";
import { useEffect, useState } from "react";

interface Props {
  wordsCollection: WordsCollection;
}

interface WordSample {
  pt: string;
  en: string;
  ru: string;
}

interface Word {
  id: number;
  word: WordSample;
  example: WordSample;
}

export interface WordsCollection {
  category: WordSample;
  words: Word[];
}

function SimpleWordsCardsPage({ wordsCollection }: Props) {
  const words = wordsCollection.words;

  const { lang } = useLanguage();
  const [currentWordId, setCurrentWordId] = useState(0);

  useEffect(() => {
    setCurrentWordId(0);
  }, [wordsCollection]);

  function createExample(word: Word) {
    return (
      <div>
        <div className="flex flex-col gap-2 items-center text-center">
          <span className="text-2xl">{word.example.pt}</span>
          <Separator />
          <span className=" text-xl text-center">
            {lang === "EN" ? word.example.en : word.example.ru}
          </span>
        </div>
      </div>
    );
  }

  if (!words[currentWordId]) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-start items-center h-full">
        <div className="h-[100%] w-full">
          <div className="ml-10">
            {lang === "EN" ? "Word " : "Слово "}
            {currentWordId + 1}
            {lang === "EN" ? " from " : " из "}
            {words.length}
          </div>

          <div className="w-[90%] mx-auto">
            <FlipCard
              image=""
              key={words[currentWordId].id}
              question={
                lang === "EN"
                  ? words[currentWordId].word.en
                  : words[currentWordId].word.ru
              }
              answer={words[currentWordId].word.pt}
              children={createExample(words[currentWordId])}
              categoryEn={wordsCollection.category.en}
              categoryRu={wordsCollection.category.ru}
            />
          </div>

          <div className="flex gap-8 justify-center">
            <Button
              className="my-4 w-32"
              onClick={() =>
                setCurrentWordId((id: number) => {
                  if (id === 0) {
                    return words.length - 1;
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
                  if (id + 1 >= words.length) {
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

export default SimpleWordsCardsPage;
