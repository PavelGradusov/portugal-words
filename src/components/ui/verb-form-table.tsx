import { Table, TableBody, TableCell, TableRow } from "./table";

export interface VerbForms {
  i: string;
  you: string;
  heSheIt: string;
  we: string;
  they: string;
}

interface Props {
  verbForm: VerbForms;
}

function VerbFormTable({ verbForm }: Props) {
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

export default VerbFormTable;
