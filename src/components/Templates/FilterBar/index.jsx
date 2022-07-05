import {FilterBarContainer} from './style';

export const FilterBar = () => {


  return (
    <>
    <FilterBarContainer>
      <div className="filterBar">
        <select name="filter" >
        <option value="a">A</option>
        <option value="b">B</option>
        </select>

        <input type="text" placeholder="digitar"/>

        <button>Pesquisar</button>
      </div>
    </FilterBarContainer>
    </>
  )
}

export default FilterBar;