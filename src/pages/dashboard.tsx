import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar";


interface IDashboardProps {
  collapsed: boolean;
}

const Dashboard = styled.div<IDashboardProps>`
  display: flex;
  flex-direction: row;
  width: ${props => (props.collapsed ? 'calc(100% - 60px)' : '100%')};
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export default function dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Dashboard collapsed={collapsed}>
      <Sidebar collapsed={collapsed} onCollapse={handleCollapse} />
      <Content>
        <h1>Dashboard Content</h1>
        <p>Here is some content for your dashboard.</p>
      </Content>
    </Dashboard>
  );
};
