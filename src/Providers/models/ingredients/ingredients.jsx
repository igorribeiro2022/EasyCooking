import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services/api";

export const IngredientsContext = createContext({});

export function IngredientsProvider({ children }) {
  const [ingredients, setIngredients] = useState(null);
  const [listIngredients, setListIngredients] = useState([])
  
  useEffect(() => {
    async function getIngredients() {
      await Api.get("/ingredientes")
      .then((res) => {
        setIngredients(res.data[0])
        setListIngredients([...listIngredients, ...res.data[0].bakehouse])
        setListIngredients([...listIngredients, ...res.data[0].dairy_and_eggs])
        setListIngredients([...listIngredients, ...res.data[0].desserts_and_snacks])
        setListIngredients([...listIngredients, ...res.data[0].drinks])
        setListIngredients([...listIngredients, ...res.data[0].fruits_vegetables])
        setListIngredients([...listIngredients, ...res.data[0].meat])
        setListIngredients([...listIngredients, ...res.data[0].spice])
      })
      .catch((err) => console.log(err));
    }
    getIngredients();
  }, []);

  function ratingMax(user, element, rating) {
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

    <IngredientsContext.Provider value={{ ingredients, listIngredients, ratingMax }}>
      {children}
    </IngredientsContext.Provider>
  );
}
