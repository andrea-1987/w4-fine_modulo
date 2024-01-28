import{ url , key} from "./api.js"
// export const url = "https://striveschool-api.herokuapp.com/api/product/";
// export const key =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMTk1NDkxM2Y2NTAwMThkMDkwNjYiLCJpYXQiOjE3MDYyODcwNTUsImV4cCI6MTcwNzQ5NjY1NX0.u_Z9UkHsh6WT2Ilmf-wdWyDRrGrbBpO-Ckmm75pfOjI";

  
  
  const params= new URLSearchParams(location.search)
  const query= params.get("id")
  
  export async function detailPage(){
      try {
          const response= await fetch( url +query,{
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
            
    let cardDetail=document.getElementById("cardDetail")
      const dati = await response.json();
     
        cardDetail.innerHTML += `
        <div class="card col-3 mx-3 my-3" style="width: 18rem;">
        <img src="${dati.imageUrl}" class="card-img-top col-3" alt="...">
        <div class="card-body">
        <h5 class="card-title">${dati.name}</h5>
        <p class="card-text">${dati.description}</p>
        <p class="card-text">$ ${dati.price}</p>
        <p class="card-text">id: ${dati._id}</p>
        <a href="detail.html?id=${dati._id}" class="btn btn-primary ${dati._id} ">Mostra Dettagli</a>
        <a href="#" class="btn btn-primary elimina" id="${dati._id}">Delete</a>
          </div>`;
    
   
} catch (error) {
    console.log( "card non creata", error)
}
}

document.addEventListener("DOMContentLoaded", event=>{ detailPage()
})
