import { Header } from "../../components/Templates/Header/index.jsx";
import { Container } from "./style.js";
import { UserRecipes } from "../../components/Templates/UserRecipes";
import { UserContext } from "../../Providers/models/user/user.jsx";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { style } from "../../components/Templates/AddRecipeModal/style.js";

function DashBoard() {
  const { verify } = useContext(UserContext);
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  const clickOnCard = (e) => {
    setOpen(true);
    console.log(e.target);
  };

  return (
    <>
      <Container>
        <div className="buttonsDiv">
          <button className="button">Minhas Receitas</button>
          <button className="button">Receitas Salvas</button>
          <button className="button">Ingredientes</button>
        </div>

        <div className="dashboardContent">
          <UserRecipes onClick={clickOnCard} />
        </div>
      </Container>
    </>
  );
}

export default DashBoard;
