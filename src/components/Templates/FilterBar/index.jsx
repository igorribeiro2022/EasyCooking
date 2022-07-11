import { useContext } from "react";
import { useState } from "react";
import { RecipesContext } from "../../../Providers/models/recipes/recipes";
import { FilterBarContainer } from "./style";

export const FilterBar = () => {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("Recipe");
  const { searchRecipesTitle } = useContext(RecipesContext);
  const { setSearchOn } = useContext(RecipesContext);
  const { searchRecipesIngredients } = useContext(RecipesContext);
  console.log(option);

  const handleSearch = (e) => {
    if (e === "") {
      setSearchOn(false);
      setSearch(e);
    } else setSearch(e);
  };

  const handleSubmit = () => {
    if (option === "Recipe") {
      return searchRecipesTitle(search);
    }
    return searchRecipesIngredients(search);
  };

  return (
    <>
      <FilterBarContainer>
        <div className="filterBar">
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            name="filter"
          >
            <option value="Recipe">Receitas</option>
            <option value="Ingredient">Ingredientes</option>
          </select>

          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Digite aqui"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Pesquisar
          </button>
        </div>
        <div className="filterButtons">
          <button className="B1">Receitas</button>
          <button className="B2">Receitas</button>
          <button className="B3">Receitas</button>
          <button className="B4">Receitas</button>
        </div>
      </FilterBarContainer>
    </>
  );
};

export default FilterBar;
