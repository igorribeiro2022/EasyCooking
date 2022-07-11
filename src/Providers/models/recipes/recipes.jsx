import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services/api";

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(null);
  const [searchOn, setSearchOn] = useState(false);
  const [recipesTitles, setRecipesTitles] = useState();
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

  function searchRecipesTitle(data) {
    const searchRecipes = recipes.filter((element) => {
      if (
        element.name
          .normalize("NFD")
          .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
          .toLowerCase()
          .includes(
            data
              .normalize("NFD")
              .replace()
              .toLowerCase(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
          )
      ) {
        setSearchOn(true);
        return element;
      }
    });
    setRecipesTitles(searchRecipes);
  }

  function searchRecipesIngredients(data) {
    const ingredients = data.split(", ");
    // const userSearch = data.normalize("NFD")
    //   .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
    // debugger;

    const searchRecipes = ingredients.map((ingredient) => {
      return recipes.find((element) => {
        if (
          element.ingredients.some((e) =>
            e.name
              .normalize("NFD")
              .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
              .includes(
                ingredient
                  .normalize("NFD")
                  .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
                  .toLowerCase()
              )
          )
        ) {
          setSearchOn(true);
          return element;
        }
      });
    });
    const filteredRecipes = searchRecipes.filter(
      (element, index) => searchRecipes.indexOf(element) === index
    );
    setRecipesTitles(filteredRecipes);
  }

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        RegisterRecipe,
        setSearchOn,
        searchOn,
        searchRecipesTitle,
        recipesTitles,
        searchRecipesIngredients,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
