import CustomTable from "../../components/table/index";

export default function Services() {
  const headers = ['Nome', 'Idade', 'Email'];
  const data = [
    ['João', 25, 'joao@example.com'],
    ['Maria', 30, 'maria@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
  ];  
  return (
    <CustomTable 
      headers={headers}
      data={data}
      displayActions={false}
    />
  );
};
