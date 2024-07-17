"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  useTabStore  from "../_components/context/TabStore";
import SignUpForm from "../_components/SignUpForm";
import SignInForm from "../_components/SignInForm";
import axios from 'axios'
import Image from "next/image";

export default function AuthPage() {
  const { currentTab, setCurrentTab } = useTabStore();

  // const handleSignIn = async ()=>{
  //   console.log("Signing in...");
  // }
  // const handleSignUp = async ()=>{
  //   console.log("Signing up..."); 
  // }

  return (
    <div className="flex items-center bg-blue-100 h-[100vh] justify-center gap-10 px-[20px] sm:px-[50px]">
      <Tabs defaultValue={currentTab}
      className="flex items-center flex-col w-[600px] rounded-md" >
        <TabsList className="w-full h-[50px] py-1.5 px-2 shadow-md">
          <TabsTrigger value="sign-up" className="w-1/2 h-full">Sign Up</TabsTrigger>
          <TabsTrigger value="sign-in" className="w-1/2 h-full">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-up" className="bg-white w-full h-full shadow-2xl rounded-md p-4">
          <SignUpForm/>
        </TabsContent>
        <TabsContent value="sign-in" className="bg-white w-full h-full shadow-2xl rounded-md p-4">
          <SignInForm/>
        </TabsContent>
      </Tabs>
      <div className="w-[calc(50vw-20px)] h-full hidden md:block">
        <Image
        src='/auth-banner.png'
          alt="auth-banner"
          width={10000}
          height={1000}
          className="h-full overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
