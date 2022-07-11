import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 120px;
    background-color: ${(props) => props.theme.colorHeader};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15vw;

    img {
        width: 150px;
        height: 180px;
        margin-left: 80px;
        cursor: pointer;
    }


    button {
        width: 40px;
        height: 40px;
        background-color: black;
        border: none;
        color: white;
        border-radius: 50%;
        margin-right: 80px;
    }
`;