import { Container } from "./style.js";
import { UserRecipes } from "../../components/Templates/UserRecipes";
import { UserContext } from "../../Providers/models/user/user.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddRecipeModal } from "../../components/Templates/AddRecipeModal/index.jsx";
import { UserSavedRecipes } from "../../components/Templates/UserSavedRecipes";
import { Api } from "../../services/api.js";
import RecipeCard from "../../components/Templates/RecipeCard/index.jsx";
import { RecipesContext } from "../../Providers/models/recipes/recipes.jsx";

function DashBoard() {
  const [myRecipes, setMyRecipes] = useState(null);

  const [open, setOpen] = useState(false);
  const [buttonfilter, setButtonfilter] = useState("userRecipes");
  const { recipes } = useContext(RecipesContext);


  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(recipes);
    const id = localStorage.getItem("@Easy:Id");
    const newRecipes = recipes?.filter((e) => e.userId === id);
    console.log(newRecipes);
    setMyRecipes(newRecipes);
  }, []);

  const clickOnCard = (e) => setOpen(true);

  return (
    <>
      <Container>
        <div className="buttonsDiv">
          <button
            onClick={() => {
              setButtonfilter("userRecipes");
            }}
            className="button"
          >
            Minhas Receitas
          </button>

          <button
            onClick={() => {
              setButtonfilter("savedRecipes");
            }}
            className="button"
          >
            Receitas Salvas
          </button>
        </div>

        <div className="dashboardContent">
          {buttonfilter === "userRecipes" ? (
            <UserRecipes onClick={clickOnCard} />
          ) : null}
          {buttonfilter === "savedRecipes" ? (
            <UserSavedRecipes onClick={clickOnCard} />
          ) : null}
        </div>
        {console.log({ myRecipes })}

      </Container>
      <AddRecipeModal open={open} setOpen={setOpen} />
    </>
  );
}

export default DashBoard;
