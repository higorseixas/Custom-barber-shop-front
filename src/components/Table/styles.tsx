import styled from 'styled-components';

// export const SyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   overflow: hidden;
//   border: 1px solid #000000;
//   border-radius: 0.5rem;
//   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
//   th {
//     text-align: left;
//     padding: 1rem;
//   }
// `;

// export const SyledTableHeader = styled.thead`
//   color: #fff;
//   background-image: linear-gradient(to right, #6c63ff, #a855f7);
// `;

// export const SyledTableBody = styled.tbody`
//   & > tr:nth-child(even) {
//     background-color: #f3f3f3;
//     :hover {
//       background-color: #e4dddd;
//     }
//   }

//   & > tr:nth-child(odd) {
//     background-color: #ffffff;
//     :hover {
//       background-color: #e4dddd;
//     }
//   }

// `;

// export const StyledTableCell = styled.td`
//   display: flex;
//   justify-content: center;
// `;

// export const StyledButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 1rem;
//   padding: 0.5rem;
//   border-radius: 9999px;
//   color: ${({ color }) => color};
//   background-color: ${({ backgroundColor }) => backgroundColor};
//   &:hover {
//     background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
//   }
// `;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const ActionsCell = styled(TableCell)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.button`
  margin-right: 4px;
`;

export const DeleteButton = styled.button`
  margin-left: 4px;
`;