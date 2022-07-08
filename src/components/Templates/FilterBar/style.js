import styled from "styled-components";

export const FilterBarContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    

.filterBar{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
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
    background-color: #f6f4f6ff;
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
.B1{
    background-color: #EF6F6F;
}
.B2{
    background-color: #81F3AF;
}
.B3{
    background-color: #8A81F3;
}
.B4{
    background-color: #EFD36F;
}
`;