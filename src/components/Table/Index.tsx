import { DeleteIconTable, EditIconTable } from "../Svgs"
import { 
  SyledTable, 
  SyledTableHeader, 
  SyledTableBody, 
  StyledTableCell,
  StyledButton
} from "./styles"

interface TableProps<T> {
  items: T[];
  onItemSelect?: (item: T) => void;
  onItemDelete?: (item: T) => void;
  headers: { key: string; label: string }[];
  renderRow: (item: T) => React.ReactNode;
}

export default function Table<T>(props: TableProps<T>) {

  const { items, onItemSelect, onItemDelete, headers, renderRow } = props;
  const displayActions = onItemDelete || onItemSelect;


  function renderhHeader() {
    return (
      <tr>
        {headers.map((header) => (
          <th key={header.key}>{header.label}</th>
        ))}
        {displayActions ? <th>Ações</th> : false}
      </tr>
    )
  }

  function RenderData() {
    return props.items?.map((cliente, i) => {
      return (
        <tr key={cliente.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <th>{items.id}</th>
          <th>{items.nome}</th>
          <th>{items.idade}</th>
          {displayActions ? renderAtion(items) : false}
        </tr>
      )
    })
  }

  function renderAtion(cliente: Cliente) {
    return (
      <StyledTableCell>
        {props.itemSelecionado && (
          <StyledButton
            onClick={() => props.itemSelecionado?.(cliente)}
            color="#3B82F6"
            backgroundColor="#D1FAE5"
            hoverBackgroundColor="#A7F3D0"
          >
            <EditIconTable/>
          </StyledButton>
        )}
        {props.itemExcluido && (
          <StyledButton
            onClick={() => props.itemExcluido?.(cliente)}
            color="#EF4444"
            backgroundColor="#FEE2E2"
            hoverBackgroundColor="#FECACA"
          >
            <DeleteIconTable/>
          </StyledButton>
        )}
      </StyledTableCell>
    );
  }

  return (
    <SyledTable>
      <SyledTableHeader>
        {renderhHeader()}
      </SyledTableHeader>

      <SyledTableBody>
        {RenderData()}
      </SyledTableBody>
    </SyledTable>
  )
}
