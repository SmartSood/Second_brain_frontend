import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios  from "axios";





export function useContent({shared,hash}:{shared:Boolean,
hash?:string}) {
    
  const [content, setContent] = useState([]);

  const refresh = async () => {
    
    try {
        if(!shared){
      const response = await axios.get(BACKEND_URL + "/api/v1/content", {
        headers: {
          Authorization: localStorage.getItem("token") || "",
          token: localStorage.getItem("token") || "",
        },
      });
      setContent(response.data);
    }
    else{
            const response = await axios.get(BACKEND_URL + `/api/v1/brain/${hash}`,{
              headers: {
                Authorization: localStorage.getItem("token") || "",
                token: localStorage.getItem("token") || "",
              },
            });
            console.log(response.data);
            setContent(response.data);

            
    }} catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return { content, refresh };
}
