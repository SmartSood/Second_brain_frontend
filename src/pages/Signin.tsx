import { Button } from "../componets/ui/Buttons"
import { Input } from "../componets/ui/Input"
import { Ref, useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const passwordRef=useRef<HTMLInputElement>();
    const EmailRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function signin(){
        const password=passwordRef.current?.value;
        const email=EmailRef.current?.value;
       const response=await axios.post(BACKEND_URL+"/api/v1/signin",{
                email,
                password
            })
            const jwt=response.data.token;
            await localStorage.setItem("token",jwt);
            navigate("/dashboard")
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl p-8 border min-w-48">
        <Input  reference={EmailRef} placeholder="Email"></Input>
            <Input  reference={passwordRef} placeholder="Passowrd"></Input>
            <div className="flex justify-center pt-4">
            <Button onClick={signin} variant="primary" text="Signin" fullWidth={true} loading={false}></Button>
            </div>
            
        </div>
    </div>
}