import { Button, ConfigProvider, Space } from "antd";
import React from "react";
import { childrentype } from "./Interface";

const Thema: React.FC<childrentype> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00b3a8",
        borderRadius: 6,
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default Thema;
