import styled from "styled-components";


export const NameRecipe = styled.div`

    width: 100vw;
    height: 10vh;
    
    padding: 5px;
    font-size: 1.2rem;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

export const ContentPage = styled.div`

    display: flex;
    justify-content: center;
    
    

    width: 100vw;
    padding-left: 4vw;
    padding-top: 5vh;
    padding-bottom: 5vh;
    gap: 20vw;


    
    border-bottom: 2px solid ${props => props.theme.orange};

    button{
        display: flex;
        justify-content: center;
        gap: 2%;
        box-sizing: border-box;
        background-color: ${props => props.theme.button.backgroundColor};
        color: ${props => props.theme.button.textColor} ;
        padding: 4%;
        font-size: 1.1rem;

        border: none;
        border-radius: 8px;

        margin-bottom: 3vh;
    }

    figure{
        width: 34vw;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;


        border-radius: 8px;
        background-color: white;
        
        img{
            width: 100%;
            border-radius: 8px;
            border: 2px solid ${props => props.theme.orange} ;
        }
    }

    .divIngredients{
         
         display: flex;
         flex-direction: column;

         justify-content: space-around;

         h2{
            font-size: 1.6rem;
            color: ${props => props.theme.backgroundColorTwo};
            padding-bottom: 5vh;
         }

         ul{
            display: flex;
            flex-direction: column;
            /* justify-content: space-around; */
            height: 60vh;
            overflow-y: auto;
            gap: 10px;
            
            li{
 
                display: flex;
                flex-direction: column;

          

                h3{
                    display: block;
                    box-sizing: border-box;
                    padding: 2px;
                }

            }
         }

         
    }

    .divImage{
        display: flex;
        align-items: center;
        justify-content: center;

        max-width: 40vw;
    }

`

export const  Preparation = styled.div`

    width: 88vw;
    padding-top: 2vh;
    padding-left: 14.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2{
        padding-bottom: 2vh;
        color: ${props => props.theme.backgroundColorTwo};

    }

    p{
        display: block;
        font-size: 1.5rem;
        padding-bottom: 5vh;
    }



`