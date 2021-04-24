import React from 'react';
import CustomeHeader from './CustomHeader';
import CustomSider from './CustomSider';
import { Layout, Dropdown } from 'antd';
const { Content, Footer, Sider } = Layout;

const CustomLayout = (props: any) => {
  return (
    <Layout style={{ backgroundColor: '#f1f2f4' }} {...props}>
      <CustomeHeader {...props}></CustomeHeader>
      <Layout>
        <CustomSider {...props}>Maaz</CustomSider>
        <Content
          style={{
            padding: '0px 5rem 3rem 5rem',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          {props.children}
        </Content>
      </Layout>

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#2b5468',
          color: 'white',
        }}
      >
        AreWeHiring ©2021
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
