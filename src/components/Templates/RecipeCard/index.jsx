import {RecipeCardContainer} from './style.js'
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import {useState} from 'react';

function RecipeCard ({recipe}) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [rating, setRating] = useState(2)
  const token = localStorage.getItem("@Easy:Token")
  const ratingAPI = recipe.rating

  const handleView = () => {
    navigate(`receita/${recipe.name}`)
  }
  return (
    <>
    <RecipeCardContainer>
      <figure className='imgFig'>
        <img src={recipe.image} alt=""/>
      </figure>
      <h1 className="RecipeName">{recipe.name}</h1>

      <button  onClick={() => handleView()} className="RecipeButton">Ver receita</button>
    </div>
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