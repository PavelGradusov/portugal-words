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

import regularVerbs from "../../data/regular-verbs.json";

type VerbPostfixForms = {
  i: string;
  you: string;
  heSheIt: string;
  we: string;
  they: string;
};

type RuleType = {
  group: string;
  verbPostfixForms: VerbPostfixForms;
};

const rules: RuleType[] = [
  {
    group: "AR",
    verbPostfixForms: {
      i: "o",
      you: "as",
      heSheIt: "a",
      we: "amos",
      they: "am",
    },
  },
  {
    group: "ER",
    verbPostfixForms: {
      i: "o",
      you: "es",
      heSheIt: "e",
      we: "emos",
      they: "em",
    },
  },
  {
    group: "IR",
    verbPostfixForms: {
      i: "o",
      you: "es",
      heSheIt: "e",
      we: "imos",
      they: "em",
    },
  },
];

type Verb = {
  id: number;
  verb: string;
  translate: string;
  translateRu: string;
  type: string;
  url: string;
};

const verbs: Verb[] = regularVerbs;

function RegularPage() {
  const { lang } = useLanguage();

  const prepare = (verb: string, postfix: string): string => {
    return verb.slice(0, -2) + postfix;
  };

  const getPostfix = (type: string, pName: keyof VerbPostfixForms): string => {
    const rule = rules.find((r) => r.group === type);
    if (!rule) return ""; // Если правило не найдено, возвращаем пустую строку
    return rule.verbPostfixForms[pName as keyof VerbPostfixForms] || "";
  };

  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        {lang === "EN" ? "Regular verbs" : "Правильные глаголы"}
      </div>
      <Table className="text-l lg:text-xl xl:text-2xl">
        <TableCaption>
          {lang === "EN"
            ? "A list of regular verbs"
            : "Список правильных глаголов"}
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
            <TableHead className="">
              <span className="block">Eles</span>
              <span className="block">Elas</span>
              <span className="block">Vocês</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {verbs.map((verb: Verb) => {
            return (
              <TableRow
                key={verb.id}
                className={
                  verb.id % 2 === 0
                    ? "bg-secondary hover:bg-secondary"
                    : "hover:bg-transparent"
                }
              >
                <TableCell>
                  <span className="uppercase block">{verb.verb}</span>
                  <span className="block text-m lg:text-l xl:text-xl text-wrap">
                    ({lang === "EN" ? verb.translate : verb.translateRu})
                  </span>
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "i"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "you"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "heSheIt"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "we"))}
                </TableCell>
                <TableCell>
                  {prepare(verb.verb, getPostfix(verb.type, "they"))}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default RegularPage;
