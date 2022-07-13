import { RecipeCardContainer, Span, StyledButton, StyleRating } from "./style.js";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Providers/models/user/user.jsx";
import { Api } from "../../../services/api.js";

function RecipeCard({ recipe, del, setMyRecipes, myRecipes }) {
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

  const handleDelete = () => {
    const token = localStorage.getItem("@Easy:Token");
    Api.delete(`/recipes/${recipe.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const newList = myRecipes.filter((e) => e !== recipe);
        console.log(res);
        setMyRecipes(newList);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <RecipeCardContainer
        onClick={() => {
          !del && handleView();
        }}
      >
        <figure className="imgFig">
          <img src={recipe.image} alt="" />
        </figure>

        <p className="RecipeName">{recipe.name}</p>

        <div>
          {verify ? (
             <StyleRating>
                            <Rating value={rating} size="small" readOnly />
                        </StyleRating>
                    ) : (
                        <StyleRating>
                            <Rating value={rating} size="small" readOnly />
                        </StyleRating>
                    )}

          <Span className="RecipeButton" lunch={recipe.category}>
            {recipe.category}
          </Span>
          {del && (
            <StyledButton onClick={() => handleDelete()}>Delete</StyledButton>
          )}
        </div>
      </RecipeCardContainer>
    </>
  );

}

export default RecipeCard;
