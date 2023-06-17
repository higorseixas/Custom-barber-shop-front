import React from 'react';
import styled from 'styled-components';
import { TableContainer, TableHeader, TableRow, TableCell, ActionsCell, EditButton, DeleteButton } from './styles';

interface TableProps {
  headers: string[];
  data: any[][];
  displayActions?: boolean;
  handleEdit?: (rowIndex: number) => void;
  handleDelete?: (rowIndex: number) => void;
}

const CustomTable: React.FC<TableProps> = ({
  headers,
  data,
  displayActions = false,
  handleEdit,
  handleDelete,
}) => {
  const numColumns = headers.length
  
  return (
    <TableContainer>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
          {displayActions && <TableHeader>Actions</TableHeader>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
            {displayActions && (
              <ActionsCell>
                {handleEdit && (
                  <EditButton onClick={() => handleEdit(rowIndex)}>
                    Edit
                  </EditButton>
                )}
                {handleDelete && (
                  <DeleteButton onClick={() => handleDelete(rowIndex)}>
                    Delete
                  </DeleteButton>
                )}
              </ActionsCell>
            )}
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default CustomTable;
