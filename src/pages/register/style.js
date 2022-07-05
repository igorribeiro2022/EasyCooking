import styled from "styled-components";

export const MainPage = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 12vw;

width: 100vw;
height: 100vh;

background-image: linear-gradient(to right, ${(props) => props.theme.backgroundColorTwo}, ${(props) => props.theme.backgroundColorTwo}, rgb(0,0,0,0));

img{
    color: #fff;
    width: 100%;
}





span{
    color: ${(props) => props.theme.button.backgroundColor};
    font-size: 1.2rem
}

`