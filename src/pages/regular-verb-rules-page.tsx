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

function RegularVerbsPage() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        {lang === "EN"
          ? "Regular verb rules"
          : "Правила для правильных глаголов"}
      </div>
      <Table className="text-l lg:text-xl xl:text-2xl">
        <TableCaption>
          {lang === "EN"
            ? "A list of regular verb rules"
            : "Список правил для правильных глаголов"}
        </TableCaption>
        <TableHeader className="primary-darker-color">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-64 uppercase">
              {lang === "EN" ? "Group" : "Группа"}
            </TableHead>
            <TableHead className="w-32">AR</TableHead>
            <TableHead className="w-32">ER</TableHead>
            <TableHead className="">IR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell className="uppercase">Eu</TableCell>
            <TableCell>-o</TableCell>
            <TableCell>-o</TableCell>
            <TableCell>-o</TableCell>
          </TableRow>
          <TableRow className="bg-secondary hover:bg-secondary">
            <TableCell className="uppercase">Tu</TableCell>
            <TableCell>-as</TableCell>
            <TableCell>-es</TableCell>
            <TableCell>-es</TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell className="uppercase">Ele/Ela/Você</TableCell>
            <TableCell>-a</TableCell>
            <TableCell>-e</TableCell>
            <TableCell>-e</TableCell>
          </TableRow>
          <TableRow className="bg-secondary hover:bg-secondary">
            <TableCell className="uppercase">Nós</TableCell>
            <TableCell>-amos</TableCell>
            <TableCell>-emos</TableCell>
            <TableCell>-imos</TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell className="uppercase">Eles/Elas/Vocês</TableCell>
            <TableCell>-am</TableCell>
            <TableCell>-em</TableCell>
            <TableCell>-em</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default RegularVerbsPage;
