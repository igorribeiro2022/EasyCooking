import styled from "styled-components";
import {ImPlus} from "react-icons/im"

export const PlusAdd = styled(ImPlus)`
   color: ${props => props.theme.button.textColor};
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
   background-color: ${props => props.theme.button.backgroundColor};
   border-radius: 5px;
   cursor: pointer;


   :hover {
      transition: all .3s;
      filter: brightness(1.5);
   }
`;