export function SidebarItem({text,icon}:{
    text:string,
    icon:React.ReactElement
}){
    return <div className="flex items-center text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-400">
       <div className="pr-2">{icon} </div> 
       <div >{text}</div>
    </div>
}