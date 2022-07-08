import { Header } from "../../components/Templates/Header/index.jsx";
import { FilterBar } from "../../components/Templates/FilterBar/index.jsx";
import RecipeCard from "../../components/Templates/RecipeCard/index.jsx";
import { Recipes, Container } from "./style.js";
import { useContext } from "react";
import { IngredientsContext } from "../../Providers/models/ingredients/ingredients.jsx";

function Home() {
  const { ingredients } = useContext(IngredientsContext);

  return (
    <>
      <Container>
        <Header />
        <FilterBar />
        <Recipes>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </Recipes>
      </Container>
    </>
  );
}

export default Home;
