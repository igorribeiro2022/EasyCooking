import styled from "styled-components";

export const RecipeCardContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #e6e6e6;
    margin-top: 30px;
    background-color: ${(props) => props.theme.colorHeader};
    border-radius: 5px;
    border: none;
    width: 200px;
    height: 200px;
    padding: 10px 0;
    justify-content: space-between;

    cursor: pointer;


.imgFig{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100px;
    margin: 0 auto;
}
img{
    width: 100%;
    height: 100px;
}
.RecipeName{
    font-size: 11pt;
    font-weight: bold;
    margin: 0 auto;

}
.RecipeButton{
    width: 80px;
    height: 17px;
    background-color: ${(props) => props.theme.catTwo};
    border: none;
    border-radius: 8px;
    font-size: 8pt;
    font-weight: bold;
    color: ${(props) => props.theme.colorOne};
    cursor: pointer;
}

div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}
`;