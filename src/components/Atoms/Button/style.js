import styled from "styled-components";

export const StyledButton = styled.button`

width: 90%;
height: 7.5vh;

border: none;
border-radius: 10px;

font-size: 1.6rem;
color: ${(props) => props.theme.button.textColor};
background-color: ${(props) => props.theme.button.backgroundColor};

:hover{
    filter: brightness(1.3);
    transition: .3s;
}

@media(max-width: 567px){

    height: 6vh;

}


`

