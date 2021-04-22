import React from "react";
import CustomeHeader from "./CustomHeader";
import { Layout } from "antd";
const { Content, Footer } = Layout;
const CustomLayout = (props: any) => {
  return (
    <Layout style={{ backgroundColor: "#f1f2f4" }} {...props}>
      <CustomeHeader {...props}></CustomeHeader>
      <Content style={{ padding: "0px 5rem 3rem 5rem" }}>
        {props.children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#2b5468",
          color: "white",
        }}
      >
        We are Hiring ©2021
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
