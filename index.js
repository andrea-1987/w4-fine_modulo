
import { fetchCreateCard, fetchGet, fetchDelete, fetchPut } from "./api.js";
import { detailPage } from "./detail.js";
import { toggleForm } from "./helper.js";

const form = document.getElementById("form");
const enableForm = document.querySelector(".title");

const loader=document.querySelector(".tenor-gif-embed")

enableForm.addEventListener("click", toggleForm);
loader.addEventListener("click",toggleForm)


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchCreateCard();
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchCreateCard();
    window.location.reload()
  });// Create CARD
  
  fetchGet();

  const cardContainer = document.getElementById('cardFind');
  if (cardContainer) {
    cardContainer.addEventListener('click', event => {
      if (event.target.classList.contains('elimina')) {
        const id = event.target.id; // Get id from button delete
        fetchDelete(id, event); // Call Function  fetchDelete passing  the id 
      }
    });
  } else {
    console.error("Elemento #cardFind non trovato nel DOM");
  }

});

const change=document.getElementById("change")
change.addEventListener("click", event=>{
  event.preventDefault();
fetchPut()
window.location.reload()
})



