import { Button } from "../componets/ui/Buttons"
import { Input } from "../componets/ui/Input"
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BrainIcon } from "../icons/BrainLogo";

export function Signin(){
    const passwordRef=useRef<HTMLInputElement>(null);
    const EmailRef=useRef<HTMLInputElement>(null);
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function signin(){
        const password=passwordRef.current?.value;
        const email=EmailRef.current?.value;

        if (!password || !email) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);
        setError("");
        
        try {
            const response=await axios.post(BACKEND_URL+"/api/v1/signin",{
                email,
                password
            });
            const jwt=response.data.token;
            await localStorage.setItem("token",jwt);
            navigate("/dashboard");
        } catch (e: any) {
            setError(e.response?.data?.message || "Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-purple-100">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <BrainIcon size="lg" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to access your second brain</p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input reference={EmailRef} placeholder="Enter your email" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <Input reference={passwordRef} placeholder="Enter your password" type="password" />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <Button 
                        onClick={signin}
                        variant="primary" 
                        text={loading ? "Signing In..." : "Sign In"} 
                        fullWidth={true} 
                        loading={loading}
                    />
                </div>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-200"></div>
                    <span className="px-4 text-sm text-gray-500">or</span>
                    <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                            Create one here
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-6">
                    <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}