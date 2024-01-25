import { animeList } from "./array.js";
let ARRAY = animeList;

const form = document.getElementById("form");
const elimina = document.querySelector(".delete");
const url = "https://striveschool-api.herokuapp.com/api/product/";
const key =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMTk1NDkxM2Y2NTAwMThkMDkwNjYiLCJpYXQiOjE3MDYyMjAxODMsImV4cCI6MTcwNzQyOTc4M30.zymE4u6MC23Yca3-2L7lOTh1GWWHpW9LM_0HhWEvm5Y";
const cardFind = document.getElementById("cardFind");

async function fetchPosts() {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(ARRAY),
    });
    if (!resp.ok) {
      throw new Error(`Errore HTTP! Status: ${resp.status}`);
    }
    
    const data = await resp.json();
    
    cardFind.innerHTML = "";
    for (const dati of data) {
      cardFind.innerHTML += `
      <div class="card col-3 mx-3 my-3" style="width: 18rem;">
      <img src="${dati.imageUrl}" class="card-img-top col-3" alt="...">
      <div class="card-body">
      <h5 class="card-title">${dati.name}</h5>
      <p class="card-text">${dati.description}</p>
      <p class="card-text">$ ${dati.price}</p>
      <a href="#" class="btn btn-primary" class="dettagli">Mostra Dettagli</a>
      <a href="#" class="btn btn-primary" class="delete">Delete</a>
      </div>`;
    }
  } catch (error) {
    console.log("postError",error);
  }
}
fetchPosts(); // Chiamata POST


async function createCard() {
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

    const newCardData = await resp.json();
    cardFind.innerHTML+= `
      <div class="card col-3 mx-3 my-3" style="width: 18rem;">
        <img src="${newCardData.imageUrl}" class="card-img-top col-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${newCardData.name}</h5>
          <p class="card-text">${newCardData.description}</p>
          <p class="card-text">$ ${newCardData.price}</p>
          <a href="#" class="btn btn-primary" class="dettagli">Mostra Dettagli</a>
          <a href="#" class="btn btn-primary" class="delete">Delete</a>
        </div>
      </div>`;
  } catch (error) {
    console.log("create", error);
  }
}


  form.addEventListener("submit",  event=>{
    event.preventDefault();
    createCard()});

  async function fetchGet() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
  
      // const data = await response.json();
      // for (let dati of data) {
      //   cardFind.innerHTML += `
      //     <div class="card col-3 mx-3 my-3" style="width: 18rem;">
      //     <img src="${dati.imageUrl}" class="card-img-top col-3" alt="...">
      //     <div class="card-body">
      //     <h5 class="card-title">${dati.name}</h5>
      //     <p class="card-text">${dati.description}</p>
      //     <p class="card-text">$ ${dati.price}</p>
      //     <a href="#" class="btn btn-primary" id="dettagli">Mostra Dettagli</a>
      //     <a href="#" class="btn btn-primary" id="delete+${dati._id}">Delete</a>
      //     </div>`;
      // }
    } catch (error) {
console.log("aiuto", error);
    }
  };fetchGet() // Chiamata GET
  

const deleteCard=async()=>{
  try{
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${data._id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  console.log("User deleted successfully");
} catch (error) {
  console.error("delete Error:", error);
}
}
elimina.addEventListener("click",deleteCard)