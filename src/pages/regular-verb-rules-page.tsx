import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function RegularVerbsPage() {
  return (
    <>
      <div className="bg-primary p-2 my-4 text-center text-3xl font-bold uppercase tracking-widest">
        Regular verb rules
      </div>
      <Table className="text-2xl">
        <TableCaption>A list of regular verb rules</TableCaption>
        <TableHeader className="bg-green-700">
          <TableRow>
            <TableHead className="w-64 uppercase">Group</TableHead>
            <TableHead className="w-32">AR</TableHead>
            <TableHead className="w-32">ER</TableHead>
            <TableHead className="">IR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="uppercase">Eu</TableCell>
            <TableCell>-o</TableCell>
            <TableCell>-o</TableCell>
            <TableCell>-o</TableCell>
          </TableRow>
          <TableRow className="bg-secondary">
            <TableCell className="uppercase">Tu</TableCell>
            <TableCell>-as</TableCell>
            <TableCell>-es</TableCell>
            <TableCell>-es</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="uppercase">Ele/Ela/Você</TableCell>
            <TableCell>-a</TableCell>
            <TableCell>-e</TableCell>
            <TableCell>-e</TableCell>
          </TableRow>
          <TableRow className="bg-secondary">
            <TableCell className="uppercase">Nós</TableCell>
            <TableCell>-amos</TableCell>
            <TableCell>-emos</TableCell>
            <TableCell>-imos</TableCell>
          </TableRow>
          <TableRow>
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
