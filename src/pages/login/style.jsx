import styled from "styled-components"

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.background};

    display: flex;
    flex-direction: row;
    
    input {
        color: ${(props) => props.theme.colorOne};
        ::placeholder{
            font-size: 10pt;
        }
    }

    button {
        height: 45px;
        width: 90%;
    }

    .iconInputs {
        color: ${(props) => props.theme.colorIcon}
    }

    .mainDiv{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .view {
        cursor: pointer;
        width: 25px;
        height: 25px;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 1.3rem;
        
    }

    h4 {
        font-weight: 300;
    }

    form {
        width: 100%;
        height: 70%;
        max-width: 390px;
        margin-bottom: 40px;

        display: flex;
        align-items: center;


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
    }

    .figLogo {
        width: 60%;
        height: 20%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-left: 50px;
        
        background-color: ${(props) => props.theme.background};
    }

    figure img {
        width: 60%;
        height: 100%;
        max-width: 400px;
        cursor: pointer;
    }

    .figCook {
        width: 40%;
        height: 450px;
        border-radius: 50px;
        margin: auto;
    }

    .pic{
        width: 100%;
        border-radius: 50px;
    }

    .link{
        cursor: pointer;

        font-size: 1rem;
        color: ${props => props.theme.button.backgroundColor};
    }

    

    @media (min-width: 800px) {
        figure {
            width: 60%;
            height: 20%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            margin-left: 50px;
            
            background-color: ${(props) => props.theme.background};
        }

        .pic{
            max-width: 710px;
            margin-right: 100px;
            display: flex;
    
        }
    }
`