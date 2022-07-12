import { RecipeCardContainer, Span } from "./style.js";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Providers/models/user/user.jsx";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const { verify } = useContext(UserContext);
  const [rating, setRating] = useState(2);

  useEffect(() => {
    const value = recipe.reviews?.reduce((prev, acc) => prev + acc.rating, 0);
    const result = value / recipe.reviews.length;
    setRating(result);
  }, []);

  const handleView = () => {
    navigate(`receita/${recipe.id}`);
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

          <Span className="RecipeButton" lunch={recipe.category}>
            {recipe.category}
          </Span>
        </div>
      </RecipeCardContainer>
    </>
  );
}

export default RecipeCard;
