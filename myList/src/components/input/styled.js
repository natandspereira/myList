import styled from "styled-components";

export const InputMyLIst = styled.input`
    displa:flex;
    align-items:center;
    justify-content:center;
    width:650px;
    height:50px;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border:none;
    text-align:center;
    color:orangered;

    &::placeholder{
        text-align:center;
        font-size:1rem;
    }

    @media (max-width: 430px){
        max-width:350px;
        margin:auto 10%;
    }
     @media (max-width: 540px){
        margin-left:50px;
        margin-top:-50px;
    }
     @media (max-width: 600px){
        width:500px;
    }
` 