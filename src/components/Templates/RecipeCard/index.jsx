import {RecipeCardContainer} from './style.js'
import {FullRecipe} from '../../Templates/FullRecipe';
import {useState} from 'react';

function RecipeCard () {
  const [isOpen, setIsOpen] = useState(false);

    
  return (
    <>
    <RecipeCardContainer>
    <div className="RecipeCard">
      <div className='ImgDiv'>
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
      </div>
      <h1 className="RecipeName">Recipe Name</h1>
      <button  onClick={() => setIsOpen(true)} className="RecipeButton">View Recipe</button>
    </div>
    </RecipeCardContainer>
    {/* <FullRecipe state={isOpen} setState={setIsOpen}/> */}
    </>
  )
}

export default RecipeCard;