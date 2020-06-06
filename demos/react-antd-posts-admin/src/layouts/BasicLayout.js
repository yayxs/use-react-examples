import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {withRouter } from 'react-router-dom'
import {
  UserOutlined,
} from "@ant-design/icons";
import "./BasicLayout.less";

import { asyncRoutes } from "../routes/index";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const BasicLayout=(props)=>
 {
  const showRoutes = asyncRoutes.filter((item) => item.show);
  console.log(showRoutes);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo">
          <Avatar src="https://yayxs.github.io/head.jpg" />
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  帖子管理
                </span>
              }
            >
              {showRoutes.map((item) => {
                return (
                  <Menu.Item
                    key={item.path}
                    onClick={(item) => props.history.push(item.key)}
                  >
                    {item.title}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "20px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default  withRouter(BasicLayout)