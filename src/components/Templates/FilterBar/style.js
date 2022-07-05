import styled from "styled-components";

export const FilterBarContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    

.filterBar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    width: 50%;


}
.filterBar select{
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 5px 0px 0px 5px;
    background-color: #f6f4f6ff;

    

}
.filterBar input{

    height: 40px;
    width: 500px;
    border: none;
    padding-left: 10px;
    

}
.filterBar button{

    border: none;
    background-color: red;
    color: white;
    height: 40px;
    width: 100px;
    border-radius: 0px 5px 5px 0px;
    

}
`;