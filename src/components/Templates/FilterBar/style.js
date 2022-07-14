import styled from "styled-components";

export const FilterBarContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    padding: 120px 0;
    background-color: ${(props) => props.theme.colorHeader};

.filterBar{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    width: 50%;
}

.divInput {
    background-color: ${(props) => props.theme.backgroundColorOne};
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    padding: 10px;
    border-radius: 35px;
}

.filterBar div select{
    
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 35px;
    background-color: transparent;
    color: ${(props) => props.theme.colorOne};
    cursor: pointer;
}
.filterBar input{

    height: 40px;
    width: 500px;
    border: none;
    background-color: transparent;
    padding-left: 10px;
    color: ${(props) => props.theme.colorOne};
    
    ::placeholder {
        color: ${(props) => props.theme.colorOne};
    }
}
.filterBar div button{

    border: none;
    background-color: ${props => props.theme.button.backgroundColor};
    color: ${props => props.theme.button.textColor};
    height: 40px;
    width: 100px;
    border-radius: 35px;

}

.filterButtons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin-top: 30px;
}

.filterButtons button{
    border: none;
    width: 150px;
    height: 30px;
    border-radius: 8px;
}

#B0{
    border-radius: 35px;
    margin: 0 5px;
    border: 2px solid ${props => props.theme.catFour};
    background-color: ${props => props.theme.backgroundColorOne};
    color: ${props => props.theme.colorIcon};
}

#B1{
    border-radius: 35px;
    background-color: ${(props) => props.theme.catOne};
    margin: 0 5px;
}

#B2{
    background-color: ${(props) => props.theme.catTwo};
    border-radius: 35px;
    margin: 0 5px;
}

#B3{
    background-color: ${(props) => props.theme.catTree};
    border-radius: 35px;
    margin: 0 5px;
}

#B4{
    background-color: ${(props) => props.theme.catFour};
    border-radius: 35px;
    margin: 0 5px;
}
`;