import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services/api";

export const IngredientsContext = createContext({});

export function IngredientsProvider({ children }) {
  const [ingredients, setIngredients] = useState(null);
  const [listIngredients, setListIngredients] = useState([]);

  useEffect(() => {
    async function getIngredients() {
      await Api.get("/ingredientes")
        .then((res) => {
          setListIngredients(res.data);
        })
        .catch((err) => console.log(err));
    }
    getIngredients();
  }, []);

  function ratingMax(user, element, rating) {
    const token = localStorage.getItem("@Easy:Token");
    const prevRev = element.reviews;
    prevRev.push({ userId: user.id, rating });
    const data = { reviews: prevRev };
    const { id } = element;
    Api.patch(`/recipes/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <IngredientsContext.Provider
      value={{ ingredients, listIngredients, ratingMax }}
    >
      {children}
    </IngredientsContext.Provider>
  );
}
