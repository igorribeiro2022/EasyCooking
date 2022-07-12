import { RecipeCardContainer, Span } from "./style.js";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { useState } from "react";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  // const { id } = useParams();
  const [rating, setRating] = useState(2);
  const token = localStorage.getItem("@Easy:Token");
  const ratingAPI = recipe.rating;

  const handleView = () => {
    navigate(`receita/${recipe.name}`);
  };
  return (
    <>
      <RecipeCardContainer onClick={() => handleView()} >
        <figure className="imgFig">
          <img src={recipe.image} alt="" />
        </figure>

        <h1 className="RecipeName">{recipe.name}</h1>


        <div>
          {token !== null ? (
            <Rating
              defaultValue={ratingAPI}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              size="small"
            />
          ) : (
            <Rating
              defaultValue={ratingAPI}
              value={rating}
              size="small"
              readOnly
            />
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
