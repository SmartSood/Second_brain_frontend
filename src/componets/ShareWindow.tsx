
import { useState } from "react";
import { Button } from "./ui/Buttons";
//controlled component
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./ui/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { CopyIcon } from "../icons/CopyIcon";
export function ShareWindow({open,onClose}){
    const [link,setLink]=useState("");
    const linkRef=useRef<any>(null);
    async function shareWindow(share){
        console.log(share)
       const response= await axios.post(BACKEND_URL+"/api/v1/brain/share",{
         share:share
        },{
            headers:{
                "Authorization":localStorage.getItem("token"),
                "token":localStorage.getItem("token")
            }

        })
    if(share){
        console.log(response)
        //@ts-expect-error nfwnwndjfr
    setLink("http://localhost:5173/brain/"+response.data.hash)
    }
    else{
        setLink("");
    }
  
        
    }
    return <div>

        {open&&<div>
        <div className="w-screen  opacity-60 h-screen bg-slate-500 fixed top-0 flex justify-center left-0">
        
        </div>
        <div className="w-screen h-screen bg-transparent fixed top-0 flex justify-center left-0">
        <div className="flex flex-col  justify-center">
        <span className="bg-white opacity-100 justify-center p-4 fixed rounded-md "> 
        <div className="flex justify-end">
            <div onClick={onClose} className="cursor-pointer">
            <CrossIcon size="md"></CrossIcon>
            </div>

        </div>
        <div className="w-full flex items-center " >
            <div>  
                {/* @ts-expect-error nfwnwndjfr */}
                <Input reference={linkRef}  value={link} edit={false}> </Input></div>
          <div>
          {link && (
    <button
      onClick={() => {
        navigator.clipboard.writeText(link);
      }}
      className="cursor-pointer"
      title="Copy to clipboard"
    >
      <CopyIcon size="xl"></CopyIcon>
    </button>
  )}
          </div>
           
        </div>
        <div className="flex justify-center">
            <div className="pr-4">
            <Button fullWidth={false} loading={false} onClick={()=>{
            shareWindow(true);
        }} variant="primary" text="Generate Link"></Button>
            </div>
 
        <Button fullWidth={false} loading={false} onClick={()=>{
            shareWindow(false);
        }} variant="secondary" text="Remove Link"></Button>

        </div>
        
        </span>
        </div>
        </div>

        
        </div>
    }
    </div>
     
}


