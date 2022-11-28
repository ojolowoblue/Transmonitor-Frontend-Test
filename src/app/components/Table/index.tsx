import * as React from "react";
import { Container, TableEL, TableRowEl, TableCellEl } from "./Table.styles";

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
  headings: {
    content: React.ReactNode;
  }[];
}

function Table(props: React.PropsWithChildren<Props>) {
  const { headings, children } = props;
  return (
    <Container>
      <TableEL>
        <thead>
          <tr>
            {headings.map((heading, i) => (
              <th key={i.toString()}>{heading.content}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableEL>
    </Container>
  );
}
export default Table;

Table.Row = function TableRow(
  props: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableRowElement>>
) {
  const { children, ...rest } = props;
  return <TableRowEl {...rest}>{children}</TableRowEl>;
};

Table.Cell = function TableCell(
  props: React.PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>
) {
  const { children, ...rest } = props;
  return <TableCellEl {...rest}>{children}</TableCellEl>;
};
