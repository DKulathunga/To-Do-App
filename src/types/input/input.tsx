import React from "react";
import { inputProps } from "..";

const Input = ({name, type, placeholder, value}: inputProps) => {
    return(
  
    <div>
        <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value}
        className="black w-full p-4 mx-2 border rounded-lg text-base bg-gray-780 border-gray-600 placeholder-gray-400 text-white" 
        />
    </div>
  );
};

export default Input;