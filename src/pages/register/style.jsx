import styled from "styled-components";

export const MainPage = styled.div`
width: 100vw;
height: 100vh;
background-color: ${(props) => props.theme.background};
display: flex;
align-items: center;
justify-content: center;
gap: 12vw;
box-shadow: 0px -22px 86px 10px rgba(0,0,0,0.4) inset;

padding: 10vw;

.view {
    cursor: pointer;
    width: 25px;
    height: 25px;
}

.iconInputs {
    color: ${(props) => props.theme.colorIcon}
}

form {
    width: 90%;
    margin: 0 auto;
    max-width: 400px;
    border-radius: 10px;

    input {
        color: ${(props) => props.theme.colorOne};
        ::placeholder{
            font-size: 10pt;
        }
    }

    div {
        margin-top: 25px 0;
        color: ${(props) => props.theme.button.colorOne};
        width: 90%;
        margin: 0 auto;

            div {
                display: flex;
                width: 100%;
                flex-direction: row;
                align-items: center;
                background-color: white;
                border-radius: 10px;
                padding: 0 10px;
                background-color: ${(props) => props.theme.inputColor};
                border-radius: 40px;

                padding: 0 20px;
                
                svg {
                    width: 21px;
                    height: 21px;
                    color: #0000009b;
                }
            }
    }
    
    h4 {
        font-weight: 300;
    }
}

.logoDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50vw;

    p {
        font-size: 17pt;
        width: 70%;
    }
    
}

.red {
    font-size: 17pt;
    color: ${(props) => props.theme.button.backgroundColor}
}

.divForm {
    width: 50vw;
}

p {
    margin-top: 80px;
    margin-left: 20px;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colorOne}; 
}

h2 {
    color: #EA1D2C;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h4 {
    color: ${(props) => props.theme.colorOne};
}

img {
    width: 70%;
    cursor: pointer;
    
}

.redSpan {
    color: ${(props) => props.theme.button.backgroundColor};
    font-size: 0.9rem;
}

.link {
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