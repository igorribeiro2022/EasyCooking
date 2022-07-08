import styled from "styled-components"

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.background};

    display: flex;
    flex-direction: row;
    

    .mainDiv{
        width: 100%;
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
    h1{
        margin-bottom: 20px;
        font-size: 1.3rem;
        margin-right: 120px;
    }
    form {
        width: 100%;
        height: 70%;
        max-width: 390px;
        margin-bottom: 40px;

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

    figure {
        width: 100%;
        height: 30%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        
        background-color: ${(props) => props.theme.background};
    }

    figure img {
        width: 90%;
        height: 100%;
        max-width: 400px;
        cursor: pointer;
    }
    

    .pic{
        width: 50%;
        margin-right: 100px;
        display: none;
        height: 70%;
        margin-top: 100px;

    }

    .link{
        cursor: pointer;

        font-size: 1rem;
        color: ${props => props.theme.button.backgroundColor};
    }

    

    @media (min-width: 800px) {
        .pic{
            max-width: 710px;
            margin-right: 100px;
            display: flex;
    
        }
    }
`