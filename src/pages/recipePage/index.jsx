/* eslint-disable eqeqeq */
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Templates/Header";
import { RecipesContext } from "../../Providers/models/recipes/recipes";
import { ContentPage, NameRecipe, Preparation } from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { Rating } from "@mui/material";
import { UserContext } from "../../Providers/models/user/user";
import { useEffect } from "react";
import { IngredientsContext } from "../../Providers/models/ingredients/ingredients";

function RecipePage() {
  const { recipeName } = useParams();
  const { ratingMax } = useContext(IngredientsContext);
  const { recipes } = useContext(RecipesContext);
  const { saveRecipe } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(null);
  const [viewRecipe] = useState(
    recipes.filter((recipe) => recipe.name == recipeName)
  );
  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const value = viewRecipe[0].reviews?.reduce(
      (prev, acc) => prev + acc.rating,
      0
    );
    const result = value / viewRecipe[0].reviews.length;
    setRating(result);
  }, [viewRecipe]);

  const handleRating = (e) => {
    console.log({ e, user });
    ratingMax(user, viewRecipe[0], e);
  };

  const handleSave = () => {
    const data = user.favorites;
    data.push(viewRecipe[0]);
    return saveRecipe(data);
  };
  console.log(viewRecipe);

  return (
    <>
      <Header />
      <NameRecipe>
        <div className="ratingAndTitle">
          <h1>{viewRecipe[0].name}</h1>
          <span>
            {console.log(user)}
            {user ? (
              <Rating
                value={rating}
                onChange={(event, newValue) => {
                  handleRating(newValue);
                }}
              />
            ) : (
              <Rating readOnly value={rating} />
            )}
          </span>
        </div>

        <div>
          <button
            onClick={() => {
              handleBack();
            }}
          >
            <AiOutlineArrowLeft /> Voltar
          </button>
          <button
            onClick={() => {
              handleSave();
            }}
          >
            Salvar <BsFillSaveFill />
          </button>
        </div>
      </NameRecipe>

      <ContentPage>
        <div className="divIngredients">

          <h2>Ingredientes e quantidades</h2>
          <ul>
            {viewRecipe[0].ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>

        <div className="divImage">
          <figure>
            <img src={viewRecipe[0].image} alt={viewRecipe[0].name} />
          </figure>
        </div>
      </ContentPage>
      <Preparation>
        <h2>Modo de preparo</h2>
        <p>{viewRecipe[0].preparation_mode}</p>
      </Preparation>
    </>
  );
}

export default RecipePage;
