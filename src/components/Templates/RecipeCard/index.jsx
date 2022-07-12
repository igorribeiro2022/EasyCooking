import { RecipeCardContainer } from "./style.js";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Providers/models/user/user.jsx";
import { IngredientsContext } from "../../../Providers/models/ingredients/ingredients.jsx";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const { verify, user } = useContext(UserContext);
  const { ratingMax } = useContext(IngredientsContext);
  const [rating, setRating] = useState(2);

  useEffect(() => {
    const value = recipe.reviews?.reduce((prev, acc) => prev + acc.rating, 0);
    const result = value / recipe.reviews.length;
    setRating(result);
  }, []);

  const handleView = () => {
    navigate(`receita/${recipe.name}`);
  };
  return (
    <>
      <RecipeCardContainer onClick={() => handleView()}>
        <figure className="imgFig">
          <img src={recipe.image} alt="" />
        </figure>

        <p className="RecipeName">{recipe.name}</p>

        <div>
          {verify ? (
            <Rating value={rating} size="small" readOnly />
          ) : (
            <Rating value={rating} size="small" readOnly />
          )}

          <span className="RecipeButton">{recipe.category}</span>
        </div>
      </RecipeCardContainer>
      {/* <FullRecipe state={isOpen} setState={setIsOpen}/> */}
    </>
  );
}

export default RecipeCard;
