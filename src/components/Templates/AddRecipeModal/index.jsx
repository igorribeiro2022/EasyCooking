import { style } from "./style";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { IngredientsContext } from "../../../Providers/models/ingredients/ingredients";

export const UserModal = ({ state, setState }) => {
  const [open, setOpen] = useState(false);
  const [arry, setArry] = useState([]);
  const { recipes } = useContext(IngredientsContext);
  console.log(recipes);

  return <Modal sx={style} open={open} onClose={() => setOpen(false)}></Modal>;
};
