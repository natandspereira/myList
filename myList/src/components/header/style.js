import styled from "styled-components";

export const DivHeader = styled.div`
     background:orange;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    flex-direction:row;

    h3{
        color:white;
        font-size:1.5rem;
    }
    @media (max-width: 430px){
       max-width:380px;
    }
     @media (max-width: 600px){
       width:600px;
    }
`