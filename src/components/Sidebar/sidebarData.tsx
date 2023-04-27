import { 
  CalenderIcon, 
  ClientIcon, 
  ConfigIncon, 
  MenuDashboardIcon, 
  PaymentIcon,
  ServicesIcon 
} from '../Svgs';


export const SidebarData = [
  {
    name: "Home",
    href: "dashboard",
    icon: <MenuDashboardIcon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Caixa",
    href: "caixa",
    icon: <PaymentIcon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Agendamento",
    href: "agendamento",
    icon: <CalenderIcon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Clientes",
    href: "clientes",
    icon: <ClientIcon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Serviços",
    href: "produtosEServiços",
    icon: <ServicesIcon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Configurações",
    href: "configurações",
    icon: <ConfigIncon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
];