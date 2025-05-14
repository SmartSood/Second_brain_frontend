import { ReactElement } from "react";

interface ButtonProps{
  variant:"primary"|"secondary",
  text:string,
  startIcon?: ReactElement
  onClick?:()=>void
  fullWidth:Boolean,
  loading:Boolean
}

const variantClasses={
  "primary":"bg-purple-600 text-white"
  ,"secondary":"bg-purple-200 text-purple-600"
}
const defaultStyles="px-4 py-2 rounded-md font-light items-center cursor-pointer justify-center flex"
export function Button(props:ButtonProps)
{
  return <button onClick={props.onClick} className={variantClasses[props.variant]+" "+ defaultStyles+ `${props.fullWidth?" w-full":""}` +`${props.loading?" opacity-45":""}` }>
    <div className="pr-2">     {props.startIcon}</div>

{props.text}
  </button>

}