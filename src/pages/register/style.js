import styled from "styled-components";

export const MainPage = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(to right, ${(props) => props.theme.backgroundColorTwo}, ${(props) => props.theme.backgroundColorTwo}, rgb(0,0,0,0));

display: flex;
align-items: center;
justify-content: center;
gap: 12vw;


.view {
        cursor: pointer;
        width: 25px;
        height: 25px;
    }
form {
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 10px;

    div {
            margin-top: 25px 0;
            color: ${(props) => props.theme.button.backgroundColor};
            div {
                display: flex;
                width: 100%;
                flex-direction: row;
                align-items: center;
                background-color: white;
                border-radius: 10px;
                padding: 0 10px;

                svg {
                    width: 21px;
                    height: 21px;

                    color: #0000009b;
                }
            }
        }
}

img{
    color: #fff;
    width: 100%;
    cursor: pointer;
}

span{
    color: ${(props) => props.theme.button.backgroundColor};
    font-size: 0.9rem;
}

.link{
    font-size: 1rem;
    color: ${props => props.theme.button.backgroundColor};

    cursor: pointer;
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