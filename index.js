import { cardCreater } from "./components.js";
import {fetchCreateCard,fetchGet} from "./api.js";


const form = document.getElementById("form");
const cardFind=document.querySelector(".cardFind")
form.addEventListener("submit",  event=>{
  event.preventDefault();
 fetchCreateCard();
 window.location.reload()
});// Create CARD
fetchGet();


// async function fetchDelete(event) {
//   if (event.target.tagName === 'BUTTON') {
//     const idcard = event.target.id;
//     const card = event.target.closest('.card');
    
//     try {
//       const response = await fetch(url + dati_id, {
//         method: "DELETE",
//         cache: "no-cache",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${key}`,
//         }
//       });
      
//       if (response.ok) {
//         card.remove();
//       } else {
//         console.error("Errore durante la richiesta di eliminazione:", response.status);
//       }
//     } catch (err) {
//       console.error("Errore catch", err);
//     }
//   }
// }
// const elimina = document.querySelector(".elimina")
// elimina.addEventListener("click", fetchDelete);


      
   document.addEventListener("DOMContentLoaded", () => {
    cardCreater();
    fetchGet()
  });
  