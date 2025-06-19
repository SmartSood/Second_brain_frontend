import { useEffect, useState } from 'react'


import { Button } from '../componets/ui/Buttons'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../componets/ui/Card'
import { CreateContentModal } from '.././componets/CreateContentModal'
import { Sidebar } from '../componets/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { ShareWindow } from '../componets/ShareWindow'
import { useParams } from 'react-router-dom'
export function Dashboard({shared}:{shared:boolean}) {
 const [modalopen,setModalOpen]=useState(false);
 const [shareopen,setShareopen]=useState(false);

 useEffect(()=>{
    refresh();
},[modalopen])
const hash=useParams().id;
const {content,refresh}=useContent({shared,hash});
  return (
   <div >
    <Sidebar></Sidebar>
    <div className='p-4 ml-72 min-h-screen border-gray-100  bg-gray-100 border'>
      {!shared&& <CreateContentModal open={modalopen} onClose={()=>{
        setModalOpen(false);
       }}></CreateContentModal>}
      {!shared&& <ShareWindow open={shareopen} onClose={()=>{
        setShareopen(false);
       }}></ShareWindow>}
     {!shared &&<div className='flex justify-end gap-4'>
      <Button variant='primary' onClick={()=>setModalOpen(true)} text='Add Content' startIcon={
<PlusIcon size='md'></PlusIcon>
      } fullWidth={false} loading={false}></Button>
      <Button variant='secondary' text='Share Brain' onClick={()=>{
        setShareopen(true);
      }} startIcon={<ShareIcon size='md'></ShareIcon>} fullWidth={false} loading={false}></Button>
      </div>}
      
      <div className='pt-4 pl-4 grid grid-cols-9 gap-4'>
      {content&&content.map(({type,link,title,_id})=>{

        async function  Delete(_id){

            try{
            await axios.post(BACKEND_URL+"/api/v1/content/delete",{
                id:_id 
            },{
                headers:{
                    "Authorization":localStorage.getItem("token"),
                    "token":localStorage.getItem("token")
                }
            })
            console.log("content deleted");
        }
        catch(err){
            console.log(err);
        }
         }
         async function  handleDelete(){
            await Delete(_id);
            refresh();
         }
        return <div className='col-span-3'><Card shared={shared} type={type} link={link} title={title} handleDelete={handleDelete}></Card></div>
      })}
     
      </div>
      
    
    </div>
    </div>
  )
}


