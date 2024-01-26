
import { cardCreater } from "./components.js";
import {fetchPosts,fetchCreateCard,fetchGet} from "./api.js";


const form = document.getElementById("form");
// const card= document.querySelector(".card")

fetchCreateCard()

form.addEventListener("submit",  event=>{
  event.preventDefault();
 fetchCreateCard();
window.location.reload()});// Create CARD

fetchGet()



// cardfind.addEventListener('click', event => {
//   if (event.target.tagName === 'BUTTON') {
//       const card = event.target.closest('card');
//       const cardId = card.id;
    
//          fetch(url + cardId, {
//           method: "DELETE",
//           cache: "no-cache",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${key}`,
//           }
//         })
//           .then(() => {
//             card.remove();
//         }).catch(err => { throw Error(err) });
//       }
// })
      
      
  

document.addEventListener("DOMContentLoaded",{
  fetchPosts,
 fetchCreateCard,
 fetchGet,

  cardCreater,
})