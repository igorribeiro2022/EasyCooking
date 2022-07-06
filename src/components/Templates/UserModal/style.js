import styled from "styled-components";

export const UserModalContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 73%;

    .UserModal{
        border-radius: 5px;
        width: 300px;
        height: 220px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background-color: white;
    }

    .UserButton{
        width: 40px;
        height: 40px;
        background-color: black;
        border: none;
        color: white;
        border-radius: 50%;
        margin-top: 10px;
        margin-right: 28px;
    }
    .UserModalContent{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .UserModalContent button{
        width: 250px;
        height: 30px;
        border: none;
        border-radius: 5px;
        margin-top: 15px;
    }
`;