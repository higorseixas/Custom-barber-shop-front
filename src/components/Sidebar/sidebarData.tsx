import { CalenderIcon, ClientIcon, ConfigIncon, LeftSidearrowIncon, MenuDashboardIcon, PaymentIcon, ServicesIcon } from '../Svgs';

export const sidebarData = [
  {
    name: "Home",
    path: "/",
    icon: <MenuDashboardIcon style={{
            marginRight:"10px", 
            height:"30px", 
            width: "30px" 
          }}/>,
  },
  {
    name: "Caixa",
    path: "/caixaPage",
    icon: <PaymentIcon style={{
            marginRight:"10px", 
            height:"30px", 
            width: "30px" 
          }}/>,
  },
  {
    name: "Agendamento",
    path: "/agendamentosPage",
    icon: <CalenderIcon style={{
            marginRight:"10px", 
            height:"30px", 
            width: "30px" 
          }}/>,
  },
  {
    name: "Clientes",
    path: "/clientes",
    icon: <ClientIcon style={{
            marginRight:"10px", 
            height:"30px", 
            width: "30px" 
          }}/>,
  },
  {
    name: "Produtos &\n Serviços",
    path: "/produtosEServiços",
    icon: <ServicesIcon style={{
            marginRight:"10px", 
            height:"30px", 
            width: "30px" 
          }}/>,
  },
  {
    name: "Configurações",
    path: "/configurações",
    icon: <ConfigIncon style={{
            marginRight:"10px", 
            height:"30px", 
            width: "30px" 
          }}/>,
  },
];