import styled from "styled-components";

export const DashBoardRecipesContainer = styled.header`
display: flex;
margin-top: 20px;
margin-left: 30px;
flex-direction: column;
align-items: center;
width: 210px;
height: 250px;
background-color: #fff;
border-radius: 5px;

.DashboardRecipe{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
   height: 100%;
 }
 .DashboardRecipe img{
    margin-top: 20px;
    width: 120px;
    height: 130px;

 }
 .DashboardRecipe p{
    margin-top: 30px;
    margin-right: 90px;
    font-size: 18px;
    font-weight: bold;

 }
 .DashboardRecipe span{
    margin-top: 10px;
    margin-left: 120px;
    font-size: 14px;
    font-weight: 400;
    
}
`;