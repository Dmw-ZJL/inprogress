import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  StarOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import "./index.less";
import type { menuListType } from "./index.d";

const { Header, Sider, Content } = Layout;

const MyLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [menu_list, set_menu_list] = useState<menuListType[]>([]);

  useEffect(() => {
    set_menu_list([
      {
        key: "blog",
        icon: <StarOutlined />,
        label: "我的博客",
      },
      {
        key: "formily",
        icon: <CodeOutlined />,
        label: "低代码平台",
      },
    ]);
  }, []);


  return (
    <Layout className="mylayout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["blog"]}
          items={menu_list}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* 子应用容器 */}
          <div id="container" className="site-layout-background" style={{ minHeight: 360 }}></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
