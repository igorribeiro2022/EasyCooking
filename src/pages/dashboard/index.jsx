import {Header} from '../../components/Templates/Header/index.jsx';
import {Container} from './style'
import {UserRecipes} from '../../components/Templates/UserRecipes';

function DashBoard () {


  return (
    <>
     <Container>
      <Header/>
      <div className="buttonsDiv">
        <button className="button">Minhas Receitas</button> 
        <button className="button">Receitas Salvas</button> 
        <button className="button">Ingredientes</button> 
      </div>

      <div className="dashboardContent">
        <UserRecipes/>
      </div>
      </Container>
    </>
  )
}

export default DashBoard;