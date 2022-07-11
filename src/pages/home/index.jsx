import { Header } from "../../components/Templates/Header/index.jsx";
import { FilterBar } from "../../components/Templates/FilterBar/index.jsx";
import RecipeCard from "../../components/Templates/RecipeCard/index.jsx";
import { Recipes, Container } from "./style.js";
import { useContext } from "react";
import { IngredientsContext } from "../../Providers/models/ingredients/ingredients.jsx";
import { RecipesContext } from "../../Providers/models/recipes/recipes.jsx";
import { UserContext } from "../../Providers/models/user/user.jsx";

function Home() {
  const { ingredients } = useContext(IngredientsContext);
  const { recipes } = useContext(RecipesContext);
  const { verify } = useContext(UserContext);
  //console.log(verify);

  return (
    <>
      <Container>
        <Header />
        <FilterBar />
        <Recipes>
          {recipes ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Recipes>
      </Container>
    </>
  );
}

export default Home;
