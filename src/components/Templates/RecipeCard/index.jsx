import {RecipeCardContainer} from './style.js'

function RecipeCard () {

    
  return (
    <RecipeCardContainer>
    <div className="RecipeCard">
      <div className='ImgDiv'>
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
      </div>
      <h1 className="RecipeName">Recipe Name</h1>
      <button className="RecipeButton">View Recipe</button>
    </div>
    </RecipeCardContainer>
  )
}

export default RecipeCard;