import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import ContentCutIcon from '@mui/icons-material/ContentCut';

export const SidebarData = [
  {
    name: "Home",
    href: "dashboard",
    icon: <HomeIcon style={{
      color: 'white',
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Caixa",
    href: "caixa",
    icon: <CurrencyExchangeIcon style={{
      marginRight: "10px",
      height: "30px",
      width: "30px",
      color: "#fff"
    }} />,
  },
  {
    name: "Agendamento",
    href: "agendamento",
    icon: <CalendarMonthIcon style={{
      color: 'white',
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Clientes",
    href: "clientes",
    icon: <ContactsIcon style={{
      color: 'white',
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Serviços",
    href: "services",
    icon: <ContentCutIcon style={{
      color: 'white',
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
  {
    name: "Configurações",
    href: "configurações",
    icon: <SettingsIcon style={{
      color: 'white',
      marginRight: "10px",
      height: "30px",
      width: "30px"
    }} />,
  },
];