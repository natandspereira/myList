import styled from "styled-components" 



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
`

export const MainMyList = styled.div`
    width:700px;
    min-height:500px;
    max-height:800px;
    border:2px solid black;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`



export const StyledInputMyList = styled.input`
background-color: ${(props) => (props.checked ? '#008000' : 'transparent')};
color: ${(props) => (props.checked ? 'white' : 'black')};
transition: background-color 0.3s;
border: 1px solid #ccc;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding: 5px 10px;
font-size:1rem;
border-radius: 5px;
text-align:center;
width:650px;
height:50px;
margin:3px 0; 
`



export const DivItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
`


