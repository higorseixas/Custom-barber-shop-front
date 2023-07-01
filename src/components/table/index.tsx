import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import DeleteIconButton from '../Buttons/DeleteIconButton';
import EditIconButton from '../Buttons/EditIconButton';

interface Column {
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

interface TableProps {
  columns: Column[];
  data: any[][];
  displayActions?: boolean;
  handleEdit?: (item: any) => void;
  handleDelete?: (item: any) => void;
}

const CustomTable: React.FC<TableProps> = ({
  columns,
  data,
  displayActions = false,
  handleEdit,
  handleDelete,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={`row-${columnIndex}`}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              {displayActions && 
                <TableCell
                  key={`displayActions`}
                  align={'right'}
                  style={{ minWidth: 100 }}
                >
                </TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`row-${rowIndex}`}>
                    {row.map((cell, cellIndex) => {
                      // const value = row[column.id];
                      return (
                        <TableCell key={`cell-${rowIndex}-${cellIndex}`}>
                          {cell}
                        </TableCell>
                      );
                    })}
                      <TableCell key={`cell-${rowIndex}`} align={'right'}>
                      <>
                        {handleEdit && (
                          <EditIconButton 
                            onClick={() => handleEdit(row)} 
                          />
                        )}
                        {handleDelete && (
                          <DeleteIconButton
                            onClick={() => handleDelete(row)}
                          />
                        )}
                      </>
                      </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CustomTable;
