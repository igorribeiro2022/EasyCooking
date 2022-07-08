import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services/api";

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(null);
  const token = localStorage.getItem("@Easy:Token");
  const userId = localStorage.getItem("@Easy:Id");

  useEffect(() => {
    async function getRecipes() {
      await Api.get("/recipes")
        .then((res) => setRecipes(res.data))
        .catch((err) => console.log(err));
    }
    getRecipes();
  }, []);

  async function RegisterRecipe({
    name,
    preparation_mode,
    image,
    category,
    ingredients,
  }) {
    const data = {
      name,
      preparation_mode,
      image,
      category,
      ingredients,
      userId,
    };
    await Api.post("/recipes", data, {
      auth: `Bearer ${token}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <RecipesContext.Provider value={{ recipes, RegisterRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
}
