import { Button } from "../componets/ui/Buttons"
import { Input } from "../componets/ui/Input"
import { Ref, useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BrainIcon } from "../icons/BrainLogo";

export function Signup(){
    const usernameRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const EmailRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    async function signup(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        const email=EmailRef.current?.value;

        if (!username || !password || !email) {
            setError("Please fill in all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        setLoading(true);
        setError("");
        
        try {
            const response=await axios.post(BACKEND_URL+"/api/v1/signup",{
                username,
                email,
                password
            });
            console.log(response);
            setSuccess(true);
            setTimeout(() => {
                navigate("/signin");
            }, 1500);
        } catch (e: any) {
            setError(e.response?.data?.message || "Something went wrong. Please try again.");
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
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                    <p className="text-gray-600">Join SecondBrain and start building your knowledge base</p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                        <Input reference={usernameRef} placeholder="Enter your username" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input reference={EmailRef} placeholder="Enter your email" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <Input reference={passwordRef} placeholder="Create a password" type="password" />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* Success Message */}
                    {success && (
                        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm">
                            Account created successfully! Redirecting to sign in...
                        </div>
                    )}

                    <Button 
                        onClick={signup}
                        variant="primary" 
                        text={loading ? "Creating Account..." : "Create Account"} 
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

                {/* Sign In Link */}
                <div className="text-center">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                            Sign in here
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