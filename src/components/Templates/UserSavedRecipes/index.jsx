import { useState } from "react";
import RecipeCard from "../../Templates/RecipeCard/index.jsx";
import { Api } from "../../../services/api";
import { useEffect } from "react";

export const UserSavedRecipes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("@Easy:Id");
    Api.get(`/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, []);

  const { favorites } = user;

  return (
    <>
      {favorites ? (
        favorites?.map((recipe) => <RecipeCard recipe={recipe} />)
      ) : (
        <h1>Não há receitas salvas</h1>
      )}
    </>
  );
};
