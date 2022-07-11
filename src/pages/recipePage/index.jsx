/* eslint-disable eqeqeq */
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Templates/Header";
import { RecipesContext } from "../../Providers/models/recipes/recipes";
import { ContentPage, NameRecipe, Preparation } from "./style";
import { AiOutlineArrowLeft}from 'react-icons/ai'
import { BsFillSaveFill } from 'react-icons/bs'
import { Rating } from "@mui/material";


function RecipePage(){

    const {recipeName} = useParams()

    const { recipes } = useContext(RecipesContext)
    const [viewRecipe] = useState(recipes.filter((recipe) => recipe.name == recipeName))


    const handleBack = () => {
        window.history.back()
    }
  

   

    return(
        <>
            <Header/>
            <NameRecipe>
                <h1>{viewRecipe[0].name}</h1>
                <div>
                    <span><Rating/></span>
                    <button onClick={() => {}}>Salvar <BsFillSaveFill/></button>
                </div>
            </NameRecipe>

            <ContentPage>
                <div className="divIngredients">
     
                    <button onClick={() => {handleBack()}}><AiOutlineArrowLeft/> Voltar</button>            

                    <h2>Ingredientes e quantidades</h2>
                        <ul>
                            {viewRecipe[0].ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                                </li>
                            ))}
                        </ul>
                </div>

                <div className="divImage">
                    <figure>
                        <img src={viewRecipe[0].image} alt={viewRecipe[0].name} />
                    </figure>
                </div>

            </ContentPage>
            <Preparation>
                <h2>Modo de preparo</h2>
                <p>
                    {viewRecipe[0].preparation_mode}
                </p>
            </Preparation>

        </>
    ) 
}

export default RecipePage