import styled from "styled-components" 

export const Header = styled.div`
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
`

export const BodyMyList = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
export const DivInserirItem = styled.div`
    position: absolute;
    top:0;
    margin: 120px auto;
    display:flex;
    align-items:center;
    flex-direction:column;

    button{
        width:100px;
        margin:10px 0;
        padding:5px;
        font-size:1rem;
        border-radius:5px;
        border:none;
        background:orange;
        color:white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const MainMyList = styled.div`
    width:300px;
    min-height:300px;
    max-height:800px;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

export const InputMyLIst = styled.input`
    width:280px;
    height:40px;
    margin:3px 0;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border:none;
    text-align:center;
    

    &::placeholder{
        text-align:center;
        font-size:1rem;
    }
`



