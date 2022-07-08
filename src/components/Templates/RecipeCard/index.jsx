import {RecipeCardContainer} from './style.js'
import {FullRecipe} from '../../Templates/FullRecipe';
import {useState} from 'react';

function RecipeCard ({recipe,key}) {
  const [isOpen, setIsOpen] = useState(false);

    
  return (
    <>
    <RecipeCardContainer>
    <div className="RecipeCard">
      <div className='ImgDiv'>
        <img src={recipe.image} alt=""/>
      </div>
      <h1 className="RecipeName">{recipe.name}</h1>
      <button  onClick={() => setIsOpen(true)} className="RecipeButton">View Recipe</button>
    </div>
    </RecipeCardContainer>
    {/* <FullRecipe state={isOpen} setState={setIsOpen}/> */}
    </>
  )
}

export default RecipeCard;