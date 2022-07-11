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

    .imgLogo {
        width: 150px;
        height: 180px;
        cursor: pointer;
    }

    .divButtons button {
        margin: 0 10px;
        border: none;
        background-color: #EA1D2C;
        color: white;
        height: 35px;
        width: 100px;
        border-radius: 35px;
    }

    .figurePerfil {
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        overflow: hidden;

        border-radius: 50%;

        cursor: pointer;
    }

    .imgPerfil {
        width: 100%;
    }

`;