import { style } from "./style";
import { Modal } from "@mui/material";
import { useState } from "react";

export const UserModal = ({ state, setState }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal sx={style} open={open} onClose={() => setOpen(false)}>
       
    </Modal>
  );
};
