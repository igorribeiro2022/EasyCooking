import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

.buttonsDiv{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 94%;
    margin-top: 30px;

}
.button{
    width: 25%;
    max-width: 200px;
    height: 40px;
    border-radius: 40px;
    border: none;
    background-color: #FF4444;
    color: white;

}
.button:hover{
    background-color: #EA1D2C;
} 

.dashboardContent{
    background-color: ${(props) => props.theme.colorThree};
    border-radius: 5px;
    width: 75%;
    height: 550px;
    margin-top: 25px;

}

`;