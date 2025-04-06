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
import interrogativeWords from "../../data/interrogative-words.json";

interface InterrogativeWord {
  id: number;
  word: {
    pt: string;
    en: string;
    ru: string;
  };
  example: {
    pt: string;
    en: string;
    ru: string;
  }[];
}

const words: InterrogativeWord[] = interrogativeWords;

function InterrogativePage() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        {lang === "EN" ? "Interrogative words" : "Вопросительные слова"}
      </div>
      <Table className="text-l lg:text-xl xl:text-2xl">
        <TableCaption>
          {" "}
          {lang === "EN"
            ? "A list of interrogative words"
            : "Список вопросительных слов"}
        </TableCaption>
        <TableHeader className="primary-darker-color">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-24">
              <span className="block">
                {lang === "EN" ? "Interrogative word" : "Вопрос"}
              </span>
              <span className="block ">
                ({lang === "EN" ? "Translate" : "Перевод"})
              </span>
            </TableHead>
            <TableHead className="">Examples</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {words.map((word) => (
            <>
              <TableRow
                key={word.id}
                className={
                  word.id % 2 === 0
                    ? "bg-secondary hover:bg-secondary"
                    : "hover:bg-transparent"
                }
              >
                <TableCell
                  rowSpan={word.example.length}
                  className="whitespace-break-spaces"
                >
                  <span className="block">{word.word.pt}?</span>
                  <span className="block text-m lg:text-l xl:text-xl text-wrap mt-2 ml-4">
                    ({lang === "EN" ? word.word.en : word.word.ru}?)
                  </span>
                </TableCell>
                <TableCell>
                  <span className="block text-wrap">{word.example[0].pt}</span>
                  <span className="block text-m lg:text-l xl:text-xl text-wrap mt-2 ml-4">
                    ({lang === "EN" ? word.example[0].en : word.example[0].ru})
                  </span>
                </TableCell>
              </TableRow>
              {word.example.map((ex, i) => {
                if (i === 0) {
                  return null;
                }
                return (
                  <TableRow
                    key={ex.pt}
                    className={
                      word.id % 2 === 0
                        ? "bg-secondary hover:bg-secondary"
                        : "hover:bg-transparent"
                    }
                  >
                    <TableCell>
                      {" "}
                      <span className="block text-wrap">{ex.pt}</span>
                      <span className="block text-m lg:text-l xl:text-xl text-wrap mt-2 ml-4">
                        ({lang === "EN" ? ex.en : ex.ru})
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default InterrogativePage;
