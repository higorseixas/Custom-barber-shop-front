import { ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "../Patterns/Sidebar";

const Dashboard = styled.div`
  display: flex;
  height: 100vh;
  width: -webkit-fill-available;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  flex-grow: 1;
  width: inherit;
  padding: 20px;
`;

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <Dashboard>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </Dashboard>
  );
};
