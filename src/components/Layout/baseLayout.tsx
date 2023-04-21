import { SidebarProvider } from "@/contexts/SidebarContext";
import { ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/sidebar";

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

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Dashboard>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Dashboard>
    </SidebarProvider>
  );
};
