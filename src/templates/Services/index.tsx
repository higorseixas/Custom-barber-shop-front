import CustomTable from "../../components/table/index";

export default function Services() {

  const data = [
    ['João', 25, 'joao@example.com'],
    ['Maria', 30, 'maria@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
    ['Pedro', 40, 'pedro@example.com'],
  ];
  
  const handleEdit = (item: any) => {
    console.log(item)
  }

  return (
    <>
      <div style={{ height: '400px' }}>
        <CustomTable 
          columns={[
            { label: 'Name', minWidth: 170 },
            { label: 'ISO\u00a0Code', minWidth: 100 },
            {
              label: 'Density',
              minWidth: 170,
              // align: 'right',
              format: (value: number) => value.toFixed(2),
            },
          ]}
          data={data}
          displayActions={true}
          handleEdit={handleEdit}
          handleDelete={handleEdit}
        />
      </div>

      <p>TESTE</p>
    </>
  );
};
