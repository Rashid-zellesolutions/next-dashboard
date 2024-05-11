"use client"
import React, {useState, HTMLAttributes} from 'react'
import MySidebar from '@/component/SideBar/Sidebar';
import MyHeader from '@/component/header/Header';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

type Props = {
  navToggle: boolean;
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

interface SidebarProps {
  collapsed?: boolean;
}

const Sidebar = styled.aside<SidebarProps>`
  width: ${({ collapsed }) => (collapsed ? '80px' : '220px')}; /* Adjust width based on the collapsed state */
  background-color: #f0f0f0;
  transition: width 0.3s ease; /* Add transition for smooth width change */
  position: relative;
`;

const Main = styled.main`
  flex: 1;

`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
`;

const Content = styled.div`

`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

   // State to track if sidebar is collapsed
   const [collapsed, setCollapsed] = useState(false);

   // Function to toggle the collapsed state
   const toggleCollapsed = () => {
     setCollapsed(!collapsed);
   };
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <html lang="en">
        <body>
          <Container>
            <Sidebar collapsed={collapsed} >
            <MySidebar navToggle={collapsed} />
            </Sidebar>

            <Main>
              <Header>
                <MyHeader />
              </Header>
              <Content>{children}</Content>
              <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16, bottom: 0, zIndex: 1 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Main>
            
          </Container>
        </body>
      </html>
    </>
  );
};

export default Layout;
