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
    margin-top: 20px;

}
.button{
    width: 25%;
    max-width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #B6D048;

}
button:hover{
    color: white;
} 

.dashboardContent{
    background-color: #E6E6E6;
    border-radius: 5px;
    width: 75%;
    height: 550px;
    margin-top: 25px;

}

`;