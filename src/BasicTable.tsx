import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from './data';

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Table Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sort((a, b) => {
            return a.lastName.localeCompare(b.lastName, 'el');
          }).map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {row.lastName}
              </TableCell>
              <TableCell>
                {row.firstName}
              </TableCell>
              <TableCell align="right">
                {row.tableNumber}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
