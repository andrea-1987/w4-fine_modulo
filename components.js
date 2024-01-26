export const cardCreater=(dati)=>{
    const cardFind = document.getElementById("cardFind");
    cardFind.innerHTML+=`
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