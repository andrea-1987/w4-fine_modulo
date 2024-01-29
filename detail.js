import{ url , key} from "./api.js"
import {createCardDetail } from "./components.js";

  
  const params= new URLSearchParams(location.search)
  const query= params.get("id")
  
  export async function detailPage(){
      try {
          const response= await fetch( url + query,{
              method:"GET",
              cache: "no-cache",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${key}`,
                },
            });
            
            if (!response.ok) {
                throw new Error(`Errore HTTP! Status: ${response.status}`);
            }
            
    
      const dati = await response.json();

     createCardDetail(dati)
     
        
    } catch (error) {
    console.log( "card non creata", error)
}
}

document.addEventListener("DOMContentLoaded", event=>{ detailPage()})
