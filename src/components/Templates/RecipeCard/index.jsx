import {RecipeCardContainer} from './style.js'
import { useNavigate, useParams } from 'react-router-dom';

function RecipeCard ({recipe}) {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleView = () => {
    navigate(`receita/${recipe.name}`)
  }



    
  return (
    <>
    <RecipeCardContainer>
    <div className="RecipeCard">
      <div className='ImgDiv'>
        <img src={recipe.image} alt=""/>
      </div>
      <h1 className="RecipeName">{recipe.name}</h1>
      <button  onClick={() => handleView()} className="RecipeButton">Ver receita</button>
    </div>
    </RecipeCardContainer>
    {/* <FullRecipe state={isOpen} setState={setIsOpen}/> */}
    </>
  )
}

export default RecipeCard;