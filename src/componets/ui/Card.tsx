
import { ShareIcon } from '../../icons/ShareIcon'
import { TwitterIcon } from '../../icons/TwitterIcon'
import { YoutubeIcon } from '../../icons/YoutubeIcon'
import { NoteIcon} from '../../icons/Note'
import { TrashIcon } from '../../icons/TrashIcon'
import ReactPlayer from 'react-player'
import { useEffect } from 'react'
interface CardProps{
    title:string,
    link:string,
    type:"twitter"|"youtube"|"note",
    handleDelete:()=>void,
    shared:Boolean

}
interface XPostEmbedProps {
    url: string;
  }
  
  const XPostEmbed = ({ url }: XPostEmbedProps) => {
    useEffect(() => {
      // Prevent loading script multiple times
      if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        // Re-parse tweet block if script already loaded
        // @ts-ignore
        if (window.twttr && window.twttr.widgets) {
          // @ts-ignore
          window.twttr.widgets.load();
        }
      }
    }, [url]);
  
    return (
      <blockquote className="twitter-tweet">
        <a href={url}></a>
      </blockquote>
    );
  };
export function Card({title,link,type,handleDelete,shared}:CardProps){

    console.log(type);
    console.log(link.replace("watch","embed").replace("?","/"))
    return <div><div
    className=" p-8 bg-white rounded-md border-gray-200   max-w border align-text-top">
         <div className="flex justify-between">
            <div className='flex items-center text-md'>
                <div className='text-gray-500 flex items-center pr-2'> {type==="twitter"&&<TwitterIcon size="md"/>}
                {type==="youtube"&&<YoutubeIcon size="md"/>}
                {type==="note"&&<NoteIcon size="md"></NoteIcon>}</div>
                <div> {title}</div>
               
            </div>
            <div className='flex items-center'>
                <div className='pr-2 text-gray-500' >

                    <a href={link} target="_blank"></a>

                <ShareIcon size='md'></ShareIcon>
            </div >
        
            {!shared&&<div className='p-2 cursor-pointer  text-gray-500' onClick={()=>{
                handleDelete();
            }}>
                <TrashIcon size='md'></TrashIcon>
            </div >}

            </div>
            
            
        
        </div>
        <div className='pt-4   flex items-start justify-center'>
            {type==='twitter'&& <XPostEmbed url={link.replace("x.com","twitter.com")} />}
       {type==='youtube'&& <ReactPlayer url={link} width="100%" height="100%" controls={true} />}
       {type==='note'&& <div className='max-w-full break-words  overflow-x-auto'>{link}</div>}
        </div>
       
        </div>
</div>}