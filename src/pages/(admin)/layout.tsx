import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Breadcrumb,
  Button,
  Image,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import Search from "antd/es/input/Search";
import { IconNotification } from "../../components/icon";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link to="/admin/dashboard">Dashboard</Link>,
    "1",
    <PieChartOutlined />
  ),
  getItem(
    <Link to="/admin/course">Quản lý khoá học</Link>,
    "2",
    <DesktopOutlined />
  ),
  getItem("Quản lý người dùng", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
];

const LayoutAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbItems = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      title: value.charAt(0).toUpperCase() + value.slice(1),
      to,
    };
  });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 1000,
          height: "100vh",
        }}
        theme="dark"
      >
        <div className="demo-logo-vertical flex justify-center">
          <div className="flex items-center gap-2 mt-6 mb-6">
            <div className="color-primary p-3 rounded-full size-10 flex items-center">
              <Image src="/public/logo.webp" />
            </div>
            <span className="text-xl font-bold text-white">ELearning</span>
          </div>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout
        style={{
          marginLeft: collapsed ? 80 : 250,
          transition: "margin-left 0.2s",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            position: "fixed",
            top: 0,
            left: collapsed ? 80 : 250,
            right: 0,
            zIndex: 999,
            padding: "16px",
          }}
          className="flex justify-between items-center"
        >
          <div className="w-[400px]">
            <Search placeholder="Tìm kiếm..." enterButton />
          </div>
          <div className="flex justify-end">
            <Space>
              <Button>
                <IconNotification />
              </Button>
              <header>
                <SignedOut>
                  <Link to="/sign-in">Sign In</Link>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
            </Space>
          </div>
        </div>

        <Content
          style={{
            margin: "70px 16px 0 16px",
            overflow: "initial",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link to={item.to}>{item.title}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
