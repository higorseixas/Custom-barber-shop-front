import BaseLayout from "@/components/Layout/baseLayout";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function dashboard() {

  return (
    <BaseLayout> 
      teste 1
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiClient = getAPIClient(ctx); Criar funcao que passe o contexto para dentro do parseCookie que autoriza o usuario no server side
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  // await apiClient.get('/users')

  return {
    props: {}
  }
}