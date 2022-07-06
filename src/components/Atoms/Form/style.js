import styled from "styled-components";

export const StyledForm = styled.form`

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 3vh;


    padding: 10px;

    width: 25vw;
    min-height: 40vh;
    

    border-radius: 10px;

    

    background-color: ${(props) => props.theme.translucideBlack};

    span {
        font-size: 0.9rem;
        color: ${(props) => props.theme.button.backgroundColor};

    }

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

        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }

    @media(max-width: 567px){
        width: 90vw;

        div{
            gap: 2px;
        }

        input{
            height: 5vh;
        }


    }


`

