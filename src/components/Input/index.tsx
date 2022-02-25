// import React, { InputHTMLAttributes } from "react";

import { StyleInput } from "./style";

interface Props{
    type:string;
    placeholder:string;
    onChange?:string;
}

const Input =({type,placeholder}: Props)=>{
    return(
        <StyleInput type={type} placeholder={placeholder}/>       
    )
}
export default Input;