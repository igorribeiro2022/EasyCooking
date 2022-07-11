import {RecipeCardContainer} from './style.js'
import {FullRecipe} from '../../Templates/FullRecipe';
import {useState} from 'react';
import { Rating } from '@mui/material';

function RecipeCard ({recipe}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(2)
  const token = localStorage.getItem("@Easy:Token")
  const ratingAPI = recipe.rating

  return (
    <>
    <RecipeCardContainer>
      <figure className='imgFig'>
        <img src={recipe.image} alt=""/>
      </figure>
      <h1 className="RecipeName">{recipe.name}</h1>
      <div>
        {
        token !== null ? <Rating defaultValue={ratingAPI} value={rating} onChange={(e) => setRating(e.target.value)} size="small" /> 
        : 
        <Rating defaultValue={ratingAPI} value={rating} size="small" readOnly/> 
        }
        <button  onClick={() => setIsOpen(true)} className="RecipeButton">Ver Receita</button>
      </div>
    </RecipeCardContainer>
    {/* <FullRecipe state={isOpen} setState={setIsOpen}/> */}
    </>
  )
}

export default RecipeCard;