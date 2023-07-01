import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  height: 50%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 5px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const TableRowWrapper = styled.div`
  height: 300px;
  overflow-y: scroll;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #bbb2b2;
  }
`;

export const TableCell = styled.td`
  padding: 1px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const ActionsCell = styled(TableCell)`
  text-align: right;
`;

export const EditButton = styled.button`
  margin-right: 4px;
`;

export const DeleteButton = styled.button`
  margin-left: 4px;
`;
