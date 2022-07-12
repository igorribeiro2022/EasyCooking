import { RecipeCardContainer, Span } from "./style.js";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../Providers/models/user/user.jsx";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const { verify } = useContext(UserContext)
  const [rating, setRating] = useState(2);
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

        <p className="RecipeName">{recipe.name}</p>



        <div>
          {verify ? (
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
