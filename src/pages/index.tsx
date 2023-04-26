import Sidebar from "@/components/Sidebar/sidebar";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import styled from "styled-components";
import { createRoot } from "react-dom/client";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import CaixaPage from "./caixaPage";
import AgendamentosPage from "./agendamentosPage";

const Dashboard = styled.div`
  display: flex;
  height: 100vh;
  width: -webkit-fill-available;
  position: relative;
  background-color: gray;
  overflow: hidden;
`;

const Content = styled.div`
  flex-grow: 1;
  width: inherit;
  padding: 20px;
`;

const AppLayout = () => (
    <Dashboard>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Dashboard>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "products",
        element: <CaixaPage />,
      },
      {
        path: "reports",
        element: <AgendamentosPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

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