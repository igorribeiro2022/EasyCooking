import styled from "styled-components";

export const RecipeCardContainer = styled.div`

.RecipeCard{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #e6e6e6;
    margin-top: 30px;
    background-color: orange;
    border-radius: 5px;
    border: none;
    width: 200px;
    height: 300px;

}
.ImgDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-top: 50px;
}
.RecipeCard img{
    width: 100px;
    height: 100px;
}
.RecipeName{
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 25px;


}
.RecipeButton{
    margin-top: 40px;
    margin-left: 20px;
    width: 150px;
    height: 30px;
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
    cursor: pointer;


}
`;