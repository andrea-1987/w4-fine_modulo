import { animeList } from "./array.js";

 
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMTk1NDkxM2Y2NTAwMThkMDkwNjYiLCJpYXQiOjE3MDYxMzQ4ODIsImV4cCI6MTcwNzM0NDQ4Mn0.redpAHUHV4GI4Te7YlGTT5d8ji3IZowqSqN59NwwDkg"
  const cardFind = document.getElementById("cardFind");
  
  async function fetchPosts() {
    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${key}`,
        },
        body: JSON.stringify(animeList),
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
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>`;
      }
    } catch (error) {
      console.log(error);
    }
  }  fetchPosts(); // Chiamata POST
  
  async function fetchGet() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${key}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
  
      const data = await response.json();
      // Pulisci il contenuto di cardFind prima di aggiungere nuovi elementi
    //   cardFind.innerHTML = "";
      
        // for (const dati of data) {
        //   cardFind.innerHTML += `
        //     <img src="${dati.imageUrl}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">${dati.name}</h5>
        //       <p class="card-text">${dati.description}</p>
        //       <p class="card-text">${dati.price}</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>`;
        // }
     
    } catch (error) {
      console.log(error);
    }
  }
  

  fetchGet();   // Chiamata GET
  