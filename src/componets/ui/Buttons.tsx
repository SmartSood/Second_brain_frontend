import { ReactElement } from "react";

interface ButtonProps {
variant: 'primary' | 'secondary';
size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
text:string|ReactElement;
startIcon?: any;
endIcon?: any;
onClick: () => void;
}
 const variantStyles = {
  "primary":"bg-purple-600 text-white",
  "secondary":"bg-purple-300 text-purple-600"
 }
    

const defaultStyles = "rounded-md p-4 ";

const sizeStyles = {
  "xs":"p-1 text-xs rounded-xs",
  "sm":"py-1 px-2 text-sm rounded-sm",
  "md":"py-2 px-4 text-lg rounded-md",
  "lg":"py-4 px-6 text-xl rounded-xl",
  "xl":"p-8 text-2xl rounded-2xl"
}

export const Button = (props:ButtonProps) => {
    
   

return <button className={`${variantStyles[props.variant]}  ${defaultStyles}  ${sizeStyles[props.size]} `} onClick={props.onClick}>
  <div className="flex items-center justify-center">  {props.startIcon && <div className="pr-2">{props.startIcon}</div>}
        {props.text}
        {props.endIcon && <div className="pl-2">{props.endIcon}</div>}</div>
      
      </button>
}


