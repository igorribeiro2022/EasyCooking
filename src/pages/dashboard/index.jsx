import { Header } from "../../components/Templates/Header/index.jsx";
import { Container } from "./style.js";
import { UserRecipes } from "../../components/Templates/UserRecipes";
import { UserContext } from "../../Providers/models/user/user.jsx";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const { verify } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!verify) {
      return navigate("/login");
    }
  }, [verify]);

  return (
    <Container>
      <div className="buttonsDiv">
        <button className="button">Minhas Receitas</button>
        <button className="button">Receitas Salvas</button>
        <button className="button">Ingredientes</button>
      </div>

      <div className="dashboardContent">
        <UserRecipes />
      </div>
    </Container>
  );
}

export default DashBoard;
