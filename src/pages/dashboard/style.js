import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

.buttonsDiv{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin-top: 30px;

}
.button{
    width: 25%;
    max-width: 200px;
    height: 40px;
    border-radius: 40px;
    border: none;
    background-color: ${props => props.theme.button.backgroundColor};
    color: ${props=> props.theme.button.textColor};
}
.button:hover{
    filter: brightness(1.5);
} 

.dashboardContent{
    display: flex;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.colorThree};
    border-radius: 5px;
    width: 75%;
    height: 550px;
    margin-top: 25px;
}

`;