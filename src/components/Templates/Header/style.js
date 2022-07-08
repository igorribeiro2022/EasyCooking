import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 120px;
    background-color: ${(props) => props.theme.colorHeader};
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.translucideBlack};
    
.Header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;



}
.Header img{
    width: 220px;
    height: 180px;
}
.Header button{
    width: 40px;
    height: 40px;
    background-color: black;
    border: none;
    color: white;
    border-radius: 50%;

}
`;