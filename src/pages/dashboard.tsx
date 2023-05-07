import BaseLayout from "@/components/Layout/baseLayout";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Caixa from "../templates/Caixa";
import Agendamentos from "../templates/Agendamentos";
import Services from "../templates/Services";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarContext";

export default function Dashboard() {
  const { selectedContent } = useContext(SidebarContext);

  return (
    <BaseLayout>
      {selectedContent === 'caixa' ?
        (<Caixa />) :
      selectedContent === 'agendamento' ?
        (<Agendamentos />) :
      selectedContent === 'services' ?
        (<Services />) :
        ''
      }
    </BaseLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // const apiClient = getAPIClient(ctx); Criar funcao que passe o contexto para dentro do parseCookie que autoriza o usuario no server side
//   const { ['nextauth.token']: token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       }
//     }
//   }

//   // await apiClient.get('/users')

//   return {
//     props: {}
//   }
// }