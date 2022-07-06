import {Header} from '../../components/Templates/Header/index.jsx';
import {FilterBar} from '../../components/Templates/FilterBar/index.jsx';
import RecipeCard from '../../components/Templates/RecipeCard/index.jsx';
import  {Recipes, Container}  from './style.js'; 

function Home () {


  return (
    <>
    <Container>
      <Header/>
      <FilterBar/>
      <Recipes>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>

      </Recipes>
    </Container>
    
    </>
  )
}

export default Home;