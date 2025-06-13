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

import regularVerbs from "../../data/regular-verbs-full.json";
import irregularVerbs from "../../data/irregular-verbs.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SimpleCard from "@/components/ui/simple-card";
import { useState } from "react";

export type Verb = {
  id: number;
  type: string;
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

const verbs: Verb[] = [...regularVerbs, ...irregularVerbs];
const verbsSorted = verbs.sort((a, b) => a.verb.localeCompare(b.verb));

function AllVerbsPage() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentVerb, setCurrentVerb] = useState({} as Verb);

  const showDialog = (verb: Verb) => {
    setCurrentVerb(verb);
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        {lang === "EN" ? "Verbs" : "Глаголы"}
      </div>
      <Table className="text-l lg:text-xl xl:text-2xl">
        <TableCaption>
          {lang === "EN" ? "A list of regular verbs" : "Список глаголов"}
        </TableCaption>
        <TableHeader className="primary-darker-color">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-32">
              <span className="block uppercase">
                {lang === "EN" ? "Verb" : "Глагол"}
              </span>
              <span className="block">
                ({lang === "EN" ? "translate" : "перевод"})
              </span>
            </TableHead>
            <TableHead className="w-20">Eu</TableHead>
            <TableHead className="w-20">Tu</TableHead>
            <TableHead className="w-20">
              <span className="block">Ele</span>
              <span className="block">Ela</span>
              <span className="block">Você</span>
            </TableHead>
            <TableHead className="w-20">Nós</TableHead>
            <TableHead className="w-20">
              <span className="block">Eles</span>
              <span className="block">Elas</span>
              <span className="block">Vocês</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {verbsSorted.map((verb: Verb, i) => {
            const type = verb.type.charAt(0).toUpperCase();
            return (
              <TableRow
                key={verb.id}
                className={i % 2 === 1 ? "bg-secondary" : ""}
                onClick={() => showDialog(verb)}
              >
                <TableCell className="flex items-center">
                  <div>
                    <span className="uppercase block">{verb.verb}</span>
                    <span className="block text-m lg:text-l xl:text-xl text-wrap">
                      ({lang === "EN" ? verb.translation : verb.translationRu})
                    </span>
                  </div>
                  <span
                    className={`font-bold ml-auto px-2 py-2 text-secondary ${
                      type == "R" ? "bg-primary" : "bg-red-600"
                    }`}
                  >
                    {type}
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

      {/* Dialog with cards */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[75vw] aspect-[7/10]">
          <DialogHeader>
            <DialogTitle>{lang === "EN" ? "Verb" : "Глагол"}</DialogTitle>
            <DialogDescription className="hidden">
              Details about the verb
            </DialogDescription>
          </DialogHeader>
          <SimpleCard verbToShow={currentVerb} lang={lang} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AllVerbsPage;
