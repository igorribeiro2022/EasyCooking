import { Container } from "./style.js";
import { UserRecipes } from "../../components/Templates/UserRecipes";
import { useEffect, useState } from "react";
import { AddRecipeModal } from "../../components/Templates/AddRecipeModal/index.jsx";
import { UserSavedRecipes } from "../../components/Templates/UserSavedRecipes";
import { Api } from "../../services/api.js";
import RecipeCard from "../../components/Templates/RecipeCard/index.jsx";

function DashBoard() {
  const [myRecipes, setMyRecipes] = useState(null);

  const [open, setOpen] = useState(false);
  const [buttonfilter, setButtonfilter] = useState("userRecipes");



  useEffect(() => {
    const id = localStorage.getItem("@Easy:Id");
    console.log(id);
    Api.get(`/recipes/?userId=${id}`)
      .then((res) => setMyRecipes(res.data))
      .catch((err) => console.log(err));
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
        {myRecipes?.map((e) => (
          <RecipeCard
            key={e.id}
            recipe={e}
            del
            setMyRecipes={setMyRecipes}
            myRecipes={myRecipes}
          />
        ))}
      </Container>
      <AddRecipeModal open={open} setOpen={setOpen} />
    </>
  );
}

export default DashBoard;
