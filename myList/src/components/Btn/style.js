import styled from "styled-components";

export const StyleButton = styled.button`
     width:100px;
    margin:10px 0;
    padding:5px;
    font-size:1rem;
    border-radius:5px;
    border:none;
    background:orange;
    color:white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

     @media (max-width: 430px){
        margin-right:10%;
    }
    
    @media (max-width: 540px){
        margin-left:50px;
    }
`


