import styled from "styled-components";

export const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 3vh;


    padding: 10px;

    width: 25vw;
    min-height: 40vh;

    border: 2px solid black;
    border-radius: 10px;

    

    background-color: ${(props) => props.theme.translucideBlack};

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 7px;
        width: 90%;

    }



    input{
        border-radius: 10px;
        border: none;

        width: 100%;
        height: 6.5vh;

        padding: 9px;
        font-size: 15px;
    }

    label{
        font-size: 18px;
        color: white;
    }



`

