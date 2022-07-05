import styled from "styled-components";

export const StyledButton = styled.button`

width: 90%;
height: 6.5vh;

border: none;
border-radius: 10px;

font-size: 1rem;
color: ${(props) => props.theme.button.textColor};
background-color: ${(props) => props.theme.button.backgroundColor};

margin: 10px 0;
:hover{
    filter: brightness(1.3);
    transition: .3s;
}

`

