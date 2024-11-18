import React from "react";
import { StyleButton } from "./style";



export const Btn = ({nome, onClick}) => {
    return(
        <>
            <StyleButton onClick={onClick}>{nome}</StyleButton>
        </>
    )
}

