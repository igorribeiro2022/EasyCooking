import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e6e6e6;
  background-color: ${(props) => props.theme.colorHeader};
  border-radius: 5px;
  border: none;
  width: 230px;
  height: 250px;
  padding: 10px 0;
  justify-content: space-around;

  h1 {
    display: inline-block;
    width: 90%;
    padding: 1%;
  }

  figure {
    display: flex;
    flex-direction: column;
  }

  cursor: pointer;

  .imgFig {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100px;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 120px;
    border-radius: 8px;
  }
  .RecipeName {
    font-size: 11pt;
    font-weight: bold;
    margin: 0 auto;
  }
  .RecipeButton {
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

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 80px;

  background-color: ${(props) =>
    props.lunch === "Sobremesa"
      ? props.theme.catTree
      : props.lunch === "Lanches"
      ? props.theme.catOne
      : props.lunch === "Prato Principal"
      ? props.theme.catTwo
      : props.theme.catFour};
  border: none;
  border-radius: 8px;
  font-size: 11px;

  color: ${(props) => props.theme.colorOne};
  cursor: pointer;
`;
