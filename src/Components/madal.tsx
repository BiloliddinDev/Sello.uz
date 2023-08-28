import { Modal } from "antd";
import { useState } from "react";
import { childrentype } from "../Interface";

const Madal = ({ children, showmadal, handleCancel }: childrentype) => {
  return (
    <Modal
      title="Login"
      open={showmadal}
      onCancel={handleCancel}
      okButtonProps={{}}
    >
      {children}
    </Modal>
  );
};

export default Madal;
