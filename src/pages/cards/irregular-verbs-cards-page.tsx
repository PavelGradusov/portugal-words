import { useState } from "react";
import myData from "../../data/irregular-verbs.json";
import FlipCard from "@/components/ui/flip-card";

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

const irregularVerbs: VerbType[] = myData;

function IrregularVerbsCardsPage() {
  const [currentWordId, setCurrentWordId] = useState(0);

  return (
    <>
      <div className="flex justify-start items-center h-full">
        <div className="h-[100%]">
          <div className="ml-10">
            Word: {currentWordId + 1} from {irregularVerbs.length}
          </div>

          <FlipCard
            key={irregularVerbs[currentWordId].id}
            question={irregularVerbs[currentWordId].translationRu}
            answer={irregularVerbs[currentWordId].verb}
          />

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
            show next
          </button>
        </div>
      </div>
    </>
  );
}

export default IrregularVerbsCardsPage;
