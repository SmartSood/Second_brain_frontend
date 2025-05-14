import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./Sidebar_Item";
import { BrainIcon } from "../../icons/BrainLogo";
export function Sidebar(){
    return <div className="h-screen w-72 bg-white border-gray-400 fixed left-0 top-0">
        <div className="flex items-center text-2xl pt-4 ">
            <div className="pr-2 text-purple-400"> <BrainIcon ></BrainIcon></div>
           
            Second Brain
        </div>
        <div className="pt-4 pl-8 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon size="md"></TwitterIcon>}></SidebarItem>
            <SidebarItem text="Youtube" icon={<YoutubeIcon size="md"></YoutubeIcon>}></SidebarItem>
        </div>
    </div>
}