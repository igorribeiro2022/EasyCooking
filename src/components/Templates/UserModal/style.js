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
        background-color: ${(props) => props.theme.colorHeader};
        box-shadow: 0px 0px 10px 0px ${(props) => props.theme.translucideBlack};
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
        background-color: #EF6F6F;
        color: white;
    }
    .UserModalContent button:hover{
        background-color: #EA1D2C;

    }
`;