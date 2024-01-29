export const url = "https://striveschool-api.herokuapp.com/api/product/";
export const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMTk1NDkxM2Y2NTAwMThkMDkwNjYiLCJpYXQiOjE3MDYyODcwNTUsImV4cCI6MTcwNzQ5NjY1NX0.u_Z9UkHsh6WT2Ilmf-wdWyDRrGrbBpO-Ckmm75pfOjI";

import { cardCreater } from "./components.js";

    

export async function fetchCreateCard() {

  const urlImg = document.getElementById("urlImg").value;
  const product = document.getElementById("product").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const newCard= {
    name: product,
    description: description,
    brand: "Pierrot",
    imageUrl: urlImg,
    price: price,
  }
  try {
    const resp = await fetch ( url, {
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
return newCard
  } catch (error) {
    console.log("MI spiace card non creata", error);
  }
}// Card Creation


export async function fetchGet() {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Errore HTTP! Status: ${response.status}`);
    }

    const data = await response.json();
    const cardFind=document.querySelector(".cardFind")
    for (let dati of data) {
    cardCreater(dati)
  }
}catch (error) {
    console.log("aiuto", error);
  }
}//  GET Fetch 


export async function fetchDelete(idcard) {
  const card = document.getElementById(idcard).closest('.card');

  try {
    const response = await fetch(url + idcard, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      }
    });

    if (response.ok) {
      card.remove();
    } else {
      console.error("Errore durante la richiesta di eliminazione:", response.status);
    }
  } catch (err) {
    console.error("Errore catch", err);
  }
}

export async function fetchPut(){
  const idInputValue=document.getElementById("id_input").value
  const urlImg = document.getElementById("urlImg").value;
  const product = document.getElementById("product").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const newCard= {
    name: product,
  description: description,
  brand: "Pierrot",
  imageUrl: urlImg,
  price: price,
}
try {
  const response= await fetch(url + idInputValue,{
    method: "PUT",
    cache: "no-cache",
    headers:{
      "Content-Type": "application/json",
      Authorization : ` Bearer ${key} `
    },
    body:JSON.stringify(newCard)
  } )
  if (response.ok) {
    
  }
} catch (error) {
  console.log("Error to change",error)
}
}

