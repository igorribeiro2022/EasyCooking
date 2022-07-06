import {FilterBarContainer} from './style';

export const FilterBar = () => {


  return (
    <>
    <FilterBarContainer>
      <div className="filterBar">
        <select name="filter" >
        <option value="Recipe">Receitas</option>
        <option value="Ingredient">Ingredientes</option>
        </select>

        <input type="text" placeholder="Digite aqui"/>

        <button>Pesquisar</button>
      </div>
      <div className='filterButtons'>
        <button className='B1'>Receitas</button>
        <button className='B2'>Receitas</button>
        <button className='B3'>Receitas</button>
        <button className='B4'>Receitas</button>
      </div>
    </FilterBarContainer>


    </>
  )
}

export default FilterBar;