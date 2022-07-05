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
    width: 40%;
}

span{
    color: ${(props) => props.theme.button.backgroundColor};
    font-size: 1.2rem
}

@media( max-width: 567px ){
    flex-direction: column;
    gap: 0;

    background-image: linear-gradient(to bottom, ${(props) => props.theme.backgroundColorTwo}, ${(props) => props.theme.backgroundColorTwo}, rgb(0,0,0,0));
    img{
        width: 90%;
    }
}

`