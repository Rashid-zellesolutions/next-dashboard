import React, { useState } from 'react';
import './module.sidenav.css';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Dashboard' },
  {
    key: 'insuranceForm',
    label: 'Insurance Form',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Add Peaple' },
      { key: '6', label: 'All Persons' },
    ],
  },
 
];

type Props = {
    navToggle: boolean;
  };

const MySidebar: React.FC<Props> = ({navToggle}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
    <div style={{ width: 220, height: '100vh' }}>
      <Menu
        className='side-nav'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={navToggle}
        items={items}
      />
    </div>
    </>
  );
};

export default MySidebar;