import { Header } from "../../components/Templates/Header/index.jsx";
import { Container } from "./style.js";
import { UserRecipes } from "../../components/Templates/UserRecipes";
import { UserContext } from "../../Providers/models/user/user.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddRecipeModal } from "../../components/Templates/AddRecipeModal/index.jsx";

function DashBoard() {
  const { verifyToken } = useContext(UserContext);
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);


  useEffect(() => {
     const teste = async () => {
      const algumaCoisa = await verifyToken()
      console.log(algumaCoisa);
       if (algumaCoisa) {
         return navigate("/login");
       }
     }
     
  }, []);

  const clickOnCard = (e) => setOpen(true)
  
  return (
    <>
      <Container>
        <div className="buttonsDiv">
          <button className="button">Minhas Receitas</button>
          <button className="button">Receitas Salvas</button>
          <button className="button">Ingredientes</button>
        </div>

        <div className="dashboardContent" >
          <UserRecipes onClick={clickOnCard}/>
        </div>

      </Container>
      <AddRecipeModal open={open} setOpen={setOpen} />
    </>
  );
}

export default DashBoard;
