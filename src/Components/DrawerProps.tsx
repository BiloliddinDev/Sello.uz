import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";

interface drawertype {
  open: boolean;
  setOpen: any;
}

const DrawerFun = ({ open, setOpen }: drawertype) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        size="large"
        title={`Biloliddin`}
        placement="right"
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <h1>Biloliddin Dev</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reiciendis deleniti delectus fugit sit, dignissimos odit et magnam
          distinctio harum praesentium ut, officia eum sapiente impedit
          voluptate quisquam sint error?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit est sed in velit, dolor alias
          obcaecati. Voluptatem deserunt provident a suscipit officiis assumenda
          iste porro asperiores hic, rem exercitationem totam!
        </p>
      </Drawer>
    </>
  );
};

export default DrawerFun;
