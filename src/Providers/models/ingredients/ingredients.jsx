import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services/api";

export const IngredientsContext = createContext({});

export function IngredientsProvider({ children }) {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    async function getIngredients() {
      await Api.get("/ingredientes")
        .then((res) => setIngredients(res.data[0]))
        .catch((err) => console.log(err));
    }
    getIngredients();
  }, []);

  return (
    <IngredientsContext.Provider value={{ ingredients }}>
      {children}
    </IngredientsContext.Provider>
  );
}
