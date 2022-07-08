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
    
    border: none;

    margin-top: 110px;


    span {
        font-size: 0.9rem;
        color: ${(props) => props.theme.button.background};

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
        border-radius: 40px;
        border: none;
        background-color: ${(props) => props.theme.inputColor};

        width: 100%;
        height: 6.5vh;

        padding: 9px;
        font-size: 15px;
    }

    label{
        font-size: 18px;
        font-weight: bold;
        color: ${(props) => props.theme.colorOne};

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

