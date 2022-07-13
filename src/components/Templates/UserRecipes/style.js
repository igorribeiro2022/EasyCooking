import styled from "styled-components";
import {ImPlus} from "react-icons/im"

export const PlusAdd = styled(ImPlus)`
   color: white;
   width: 50px;
   height: 50px;
`

export const DashBoardRecipesContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 210px;
   height: 250px;
   background-color: #EA1D2C;
   border-radius: 5px;
   cursor: pointer;


   :hover {
      transition: all .3s;
      filter: brightness(1.5);
   }
`;