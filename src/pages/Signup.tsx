import { Button } from "../componets/ui/Buttons"
import { Input } from "../componets/ui/Input"
import { Ref, useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup(){
    const usernameRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const EmailRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function signup(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        const email=EmailRef.current?.value;
       await axios.post(BACKEND_URL+"/api/v1/signup",{
            
                username,
                email,
                password
            }).then((res)=>{
                console.log(res.data);
                navigate("/signin");
            }).catch((e)=>{
                console.log(e);
       });
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl p-8 border min-w-48">
            <Input reference={usernameRef} placeholder="Username"></Input>
            <Input  reference={EmailRef} placeholder="Email"></Input>
            <Input  reference={passwordRef} placeholder="Passowrd"></Input>
            <div className="flex justify-center pt-4">
            <Button onClick={signup}variant="primary" text="Signup" fullWidth={true} loading={false}></Button>
            </div>
            
        </div>
    </div>
}