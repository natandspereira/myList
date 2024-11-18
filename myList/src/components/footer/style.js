import styled from "styled-components";

export const DivFooter = styled.div`
    background:orange;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    flex-direction:rown;
    position:fixed;
    bottom:0;

    h3{
        color:white;
        font-size:1rem;
        margin: auto 50px;
    }
    
    a{
        color:white;
        font-size:1rem;
        text-decoration:none;
        font-weight:800;
    }
`