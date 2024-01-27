const url = "https://striveschool-api.herokuapp.com/api/product/";
const key =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMTk1NDkxM2Y2NTAwMThkMDkwNjYiLCJpYXQiOjE3MDYyODcwNTUsImV4cCI6MTcwNzQ5NjY1NX0.u_Z9UkHsh6WT2Ilmf-wdWyDRrGrbBpO-Ckmm75pfOjI";
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
      console.log("MI spiace card non creata", error);
    }
  }// Card Creata

  // import { animeList } from "./array.js";
// export async function fetchPosts() {
//     try {
//       const resp = await fetch(url, {
//         method: "POST",
//         mode: "no-corse",
//         cache: "no-cache",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${key}`,
//         },
//         body: JSON.stringify(animeList),
//       });
//       if (!resp.ok) {
//         throw new Error(`Errore HTTP! Status: ${resp.status}`);
//       }
//     } catch (error) {
//       console.log("postError",error);
//     }
//   }//Chiamata Post

// export async function fetchGet() {
//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         cache:"no-cache",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${key}`,
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`Errore HTTP! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       for (let dati of data) {
//           cardCreater(dati)
//           }
          
//         }
//      catch (error) {
// console.log("aiuto", error);
//     }
//   }// Chiamata GET 

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
    const eliminaButtons = document.querySelectorAll(".elimina");
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < data.length; i++) {
      cardCreater(data[i]);
      const datiId = data[i]._id;

      // Verifica se ci sono elementi con la classe .elimina e .card
      if (eliminaButtons.length > i && cards.length > i) {
        eliminaButtons[i].addEventListener("click", () => handleEliminaClick(datiId, cards[i]));
      }
    }
  } catch (error) {
    console.log("Errore durante la chiamata GET", error);
  }
}

function handleEliminaClick(datiId, card) {
  // Esegui l'azione di eliminazione qui usando datiId e card
}
