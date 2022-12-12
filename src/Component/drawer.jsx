import React, { useState } from 'react';
import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Option 4', '4', <PieChartOutlined />),
    getItem('Option 5', '5', <DesktopOutlined />),
    getItem('Option 6', '6', <ContainerOutlined />),
    getItem('Option 7', '21', <PieChartOutlined />),
    getItem('Option 8', '2', <DesktopOutlined />),
    getItem('Option 9', '3', <ContainerOutlined />),
    getItem('Option 10', '4', <PieChartOutlined />),
    getItem('Option 5', '5', <DesktopOutlined />),
    getItem('Option 6', '6', <ContainerOutlined />),
    getItem('Option 1', '21', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Option 4', '4', <PieChartOutlined />),
    getItem('Option 5', '5', <DesktopOutlined />),
    getItem('Option 6', '6', <ContainerOutlined />),
    getItem('Option 7', '12', <PieChartOutlined />),
    getItem('Option 8', '2', <DesktopOutlined />),
    getItem('Option 9', '3', <ContainerOutlined />),
    getItem('Option 10', '4', <PieChartOutlined />),
    getItem('Option 5', '5', <DesktopOutlined />),
    getItem('Option 6', '6', <ContainerOutlined />),
];
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            style={{
                width: 140,
            }}
            className='sidebar_div'
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
            >
                {collapsed ? <MenuUnfoldOutlined className='unfold' /> : <MenuFoldOutlined className='fold' />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default Sidebar;