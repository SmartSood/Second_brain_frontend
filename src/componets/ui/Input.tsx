import { Ref } from "react"
export function Input({onChange,placeholder,reference,edit=true,value,type="text"}:{onChange?:()=>void,
    placeholder?:string,reference?:any,
    edit?:boolean,
    value?:string,
    type?:string
}){
        
    return <div className="flex justify-center max-w-full min-w-full ">
        
        <input 
            type={type} 
            ref={reference} 
            value={value} 
            placeholder={placeholder} 
            className="px-4 border border-gray-300 w-full rounded-lg py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200" 
            disabled={!edit} 
            onChange={onChange}
        />
    </div>
}