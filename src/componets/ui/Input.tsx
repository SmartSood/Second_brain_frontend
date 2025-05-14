import { Ref } from "react"
export function Input({onChange,placeholder,reference,edit=true,value}:{onChange?:()=>void,
    placeholder?:string,reference?:any,
    edit?:boolean,
    value?:string
}){
        
    return <div className="flex justify-center max-w-full min-w-full ">
        
        <input type="text" ref={reference} value={value} placeholder={placeholder} className="px-4 border w-full rounded m-2 py-2" disabled={!edit} onChange={onChange}/>
    </div>
}