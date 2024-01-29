export const cardCreater = (dati) => {

  cardFind.innerHTML += `
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
};
export const createCardDetail=(dati)=>{
  let cardDetail=document.getElementById("cardDetail")
  let sideBar=document.querySelector(".sideBar")
  let detailLogo=document.querySelector(".navbar-brand")
cardDetail.innerHTML=`
<img src="${dati.imageUrl}" class="card-img-top col-3" alt="...">
<div class="card-body">`;
sideBar.innerHTML=`
<h5 class="card-title mx-5 my-5">Title: ${dati.name}</h5>
<p class="card-text mx-5 my-5">Description: ${dati.description}</p>
`
detailLogo.innerHTML=`
<img src="${dati.imageUrl}" alt="">`
}
