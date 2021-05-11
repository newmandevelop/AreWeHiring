import React from 'react';
import CustomeHeader from './CustomHeader';
import CustomSider from './CustomSider';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

const CustomLayout = (props: any) => {
  return (
    <Layout style={{ backgroundColor: '#f1f2f4' }} {...props}>
      <CustomeHeader {...props}></CustomeHeader>
      {!props.sideBar && (
        <Content
          style={{
            // padding: '0px 2rem 3rem 2rem',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          {props.children}
        </Content>
      )}
      {props.sideBar && (
        <Layout>
          <CustomSider {...props} />
          <Content
            style={{
              padding: '0px 2rem 3rem 2rem',
              minHeight: 'calc(100vh - 64px)',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      )}

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
