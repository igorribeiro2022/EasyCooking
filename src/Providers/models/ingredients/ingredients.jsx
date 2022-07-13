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

  return (
    <IngredientsContext.Provider value={{ ingredients, listIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
}
