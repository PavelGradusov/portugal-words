import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useLanguage from "@/hooks/use-language";

import myData from "../../data/irregular-verbs.json";

interface VerbType {
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
}

const irregularVerbs: VerbType[] = myData;
const sortedIrregularVerbs = irregularVerbs.sort((a, b) =>
  a.verb.localeCompare(b.verb)
);

function IrregularVerbsPage() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        {lang === "EN" ? "Irregular verbs" : "Неправильные глаголы"}
      </div>
      <Table className="text-l lg:text-xl xl:text-2xl">
        <TableCaption>
          {lang === "EN"
            ? "A list of irregular verbs"
            : "Список неправильных глаголов"}
        </TableCaption>
        <TableHeader className="primary-darker-color">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-32 uppercase">
              {lang === "EN" ? "Verb" : "Глагол"}
            </TableHead>
            <TableHead className="w-32">
              {lang === "EN" ? "Translate" : "Перевод"}
            </TableHead>
            <TableHead className="w-20">Eu</TableHead>
            <TableHead className="w-20">Tu</TableHead>
            <TableHead className="w-20">
              <span className="block">Ele</span>
              <span className="block">Ela</span>
              <span className="block">Você</span>
            </TableHead>
            <TableHead className="w-20">Nós</TableHead>
            <TableHead className="">
              <span className="block">Eles</span>
              <span className="block">Elas</span>
              <span className="block">Vocês</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedIrregularVerbs.map((verb: VerbType, i) => {
            return (
              <TableRow
                key={verb.id}
                className={
                  i % 2 === 0
                    ? "bg-secondary hover:bg-secondary"
                    : "hover:bg-transparent"
                }
              >
                <TableCell className="uppercase">{verb.verb}</TableCell>
                <TableCell>
                  {" "}
                  <span className="text-wrap">
                    {lang === "EN" ? verb.translation : verb.translationRu}
                  </span>
                </TableCell>
                <TableCell>{verb.verbForms.i}</TableCell>
                <TableCell>{verb.verbForms.you}</TableCell>
                <TableCell>{verb.verbForms.heSheIt}</TableCell>
                <TableCell>{verb.verbForms.we}</TableCell>
                <TableCell>{verb.verbForms.they}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default IrregularVerbsPage;
