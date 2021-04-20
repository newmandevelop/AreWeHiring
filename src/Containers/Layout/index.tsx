import React from "react";
import CustomeHeader from "./CustomHeader";
import { Layout } from "antd";
const { Content } = Layout;
const CustomLayout = (props: any) => {
  return (
    <Layout style={{ backgroundColor: "#f1f2f4" }} {...props}>
      <CustomeHeader {...props}></CustomeHeader>
      <Content style={{ padding: "0px 5rem 3rem 5rem" }}>{props.children}</Content>
    </Layout>
  );
};

export default CustomLayout;
