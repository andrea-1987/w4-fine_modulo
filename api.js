const url = "https://striveschool-api.herokuapp.com/api/product/";
const key =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMTk1NDkxM2Y2NTAwMThkMDkwNjYiLCJpYXQiOjE3MDYyMjAxODMsImV4cCI6MTcwNzQyOTc4M30.zymE4u6MC23Yca3-2L7lOTh1GWWHpW9LM_0HhWEvm5Y";

import { cardCreater } from "./components.js";
export async function fetchCreateCard() {
    const urlImg = document.getElementById("urlImg").value;
    const product = document.getElementById("product").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
  
    const newCard = {
      name: product,
      description: description,
      brand: "Pierrot",
      imageUrl: urlImg,
      price: price,
      userId: "",
    };
  
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newCard),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      });
  
      if (!resp.ok) {
        throw new Error(`Errore HTTP! Status: ${resp.status}`);
      }
    } catch (error) {
      console.log("create", error);
    }
  }// Card Creata

  import { animeList } from "./array.js";
export async function fetchPosts() {
    try {
      const resp = await fetch(url, {
        method: "POST",
        mode: "no-corse",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(animeList),
      });
      if (!resp.ok) {
        throw new Error(`Errore HTTP! Status: ${resp.status}`);
      }
    } catch (error) {
      console.log("postError",error);
    }
  }//Chiamata Post

export async function fetchGet() {
    try {
      const response = await fetch(url, {
        method: "GET",
        cache:"no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
  
      const data = await response.json();
      for (let dati of data) {
          cardCreater(dati)
          
        }
    } catch (error) {
console.log("aiuto", error);
    }console.log(dati)
  }// Chiamata GET 

// export const remove=document.querySelectorAll(".delete");

// addListeners(remove, async function fetchDelete(ev) {
// const id=ev.target.closest(".cardFind").id
//     try {
//       await fetch(url + id, {
//         method: "DELETE",
//         cache: "no-cache",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${key}`,
//         },
//       });
//     } catch (error) {
//       console.error("Eliminazione fallita:", error);
//     }
// });
const params= new URLSearchParams(location.search)
export const id = params.get("id")
