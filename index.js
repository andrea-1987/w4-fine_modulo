import { cardCreater } from "./components.js";
import { fetchCreateCard, fetchGet, fetchDelete } from "./api.js";


const form = document.getElementById("form");
const cardFind = document.querySelector(".cardFind")
form.addEventListener("submit", event => {
  event.preventDefault();
  fetchCreateCard();
  window.location.reload()
});// Create CARD
// fetchGet();




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchCreateCard();
    window.location.reload();

  });

  fetchGet();

  const cardContainer = document.getElementById('cardFind');
  if (cardContainer) {
    cardContainer.addEventListener('click', event => {
      if (event.target.classList.contains('elimina')) {
        const id = event.target.id; // Get id from button delete
        fetchDelete(id, event); // Call Function  fetchDelete passing  tje id 
      }
    });
  } else {
    console.error("Elemento #cardFind non trovato nel DOM");
  }

  cardCreater();
  fetchGet();
});