import styled from "styled-components"

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, ${(props) => props.theme.backgroundColorTwo}, ${(props) => props.theme.backgroundColorTwo}, rgb(0,0,0,0));

    display: flex;
    flex-direction: column;

    .view {
        cursor: pointer;
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

    figure {
        width: 90%;
        height: 30%;
        overflow: hidden;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 100%;
    }

    @media (min-width: 668px) {
        background-image: linear-gradient(to left, ${(props) => props.theme.backgroundColorTwo}, ${(props) => props.theme.backgroundColorTwo}, rgb(0,0,0,0));

        flex-direction: row-reverse;
        align-items: center;

        form {
            width: 40%;
        }

        figure {
            width: 40%;
        }
    }
`