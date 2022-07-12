import { useContext } from "react";
import { UserContext } from "../../../Providers/models/user/user";
import RecipeCard from "../../Templates/RecipeCard/index.jsx";
import{Api} from "../../../services/api";
import { useEffect } from "react";

export const UserSavedRecipes =  () => {

  const { user } = useContext(UserContext);

  useEffect(() => { 
    Api.get(`/users/${user.id}`)
    .then(response => { console.log(response) }) 
    },[]);

  const favorites = user.favorites;



    return (
        <>
        {favorites? favorites?.map((recipe) => (
            <RecipeCard recipe={recipe} />))
            
        : <h1>Não há receitas salvas</h1>
        }     
        </>
    )
}
    
  