import React from "react";
import { Layout } from "antd";
import { UserAddOutlined, SettingOutlined } from "@ant-design/icons";
const { Header } = Layout;
const CustomeHeader = () => {
  return (
    <Header
      style={{
        backgroundColor: "#2b5468",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ color: "white" }}>AreWeHiring</h1>
        <div>
          <UserAddOutlined
            style={{
              color: "white",
              fontSize: "20px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          />
          <SettingOutlined
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
    </Header>
  );
};

export default CustomeHeader;
