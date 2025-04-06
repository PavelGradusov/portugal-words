import FlipCard from "@/components/ui/flip-card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import useLanguage from "@/hooks/use-language";
import { useState } from "react";
import irregularVerbsSource from "../../data/irregular-verbs.json";

interface VerbForms {
  i: string;
  you: string;
  heSheIt: string;
  we: string;
  they: string;
}

interface VerbType {
  id: number;
  verb: string;
  translation: string;
  translationRu: string;
  verbForms: VerbForms;
  url: string;
}

const irregularVerbs: VerbType[] = irregularVerbsSource;

function IrregularVerbsCardsPage() {
  const { lang } = useLanguage();

  const [currentWordId, setCurrentWordId] = useState(0);

  function createVerbForms(verbForm: VerbForms) {
    return (
      <Table>
        <TableBody className="text-sm [@media(min-width:420px)]:text-xl text-muted">
          <TableRow>
            <TableCell className="text-right w-[50%] py-0">Eu:</TableCell>
            <TableCell className="py-0">{verbForm.i}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right py-0">Tu:</TableCell>
            <TableCell className="py-0">{verbForm.you}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right py-0">Ele/Ela/Você:</TableCell>
            <TableCell className="py-0">{verbForm.heSheIt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right py-0">Nós:</TableCell>
            <TableCell className="py-0">{verbForm.we}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right py-0">Eles/Elas/Vocês:</TableCell>
            <TableCell className="py-0">{verbForm.they}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <>
      <div className="flex justify-start items-center h-full">
        <div className="h-[100%] w-full">
          <div className="ml-10">
            {lang === "EN" ? "Word " : "Слово "}
            {currentWordId + 1}
            {lang === "EN" ? " from " : " из "}
            {irregularVerbs.length}
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
