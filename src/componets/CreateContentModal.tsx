
import { useState } from "react";
import { Button } from "./ui/Buttons";
//controlled component
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./ui/Input";
import {  useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
enum ContentType{
    Youtube="youtube",
    Twitter="twitter",
    Note="note"
}
export function CreateContentModal({open,onClose}){
    const titleRef=useRef<any>(null);
    const linkRef=useRef<any>(null);
    const [type,setType]=useState(ContentType.Youtube);
    async function addContent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        await axios.post(BACKEND_URL+"/api/v1/content",{
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token"),
                "token":localStorage.getItem("token")
            }

        }).then(()=>{
            onClose();
        })
        
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
        <div className="w-full" >
            <Input reference={titleRef} placeholder={"Title"}></Input>
            <Input reference={linkRef} placeholder={(type==="note")?"description":"link"}></Input>

        </div>
        <div className="flex gap-1 p-4">
            <Button fullWidth={false} loading={false} text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>{
                setType(ContentType.Youtube);
            }}></Button>
            <Button fullWidth={false} loading={false} text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{
                setType(ContentType.Twitter);
            }}></Button>
               <Button fullWidth={false} loading={false} text="Note" variant={type===ContentType.Note?"primary":"secondary"} onClick={()=>{
                setType(ContentType.Note);
            }}></Button>
        </div>
        <div className="flex justify-center">
        <Button fullWidth={false} loading={false} onClick={addContent} variant="primary" text="Submit"></Button>
        </div>
        
        </span>
        </div>
        </div>

        
        </div>
    }
    </div>
     
}


