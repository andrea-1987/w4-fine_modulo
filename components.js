export const cardCreater = (dati) => {
  
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card col-3 mx-3 my-3';
  cardDiv.style.width = '18rem';

  const img = document.createElement('img');
  img.src = dati.imageUrl;
  img.className = 'card-img-top col-3';
  img.alt = '...';

  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = 'card-body';

  const titleH5 = document.createElement('h5');
  titleH5.className = 'card-title';
  titleH5.textContent = dati.name;

  const descriptionP = document.createElement('p');
  descriptionP.className = 'card-text';
  descriptionP.textContent = dati.description;

  const priceP = document.createElement('p');
  priceP.className = 'card-text';
  priceP.textContent = `$ ${dati.price}`;

  const idP = document.createElement('p');
  idP.className = 'card-text';
  idP.textContent = `id: ${dati._id}`;

  const detailsLink = document.createElement('a');
  detailsLink.href = `detail.html?id=${dati._id}`;
  detailsLink.className = `btn btn-primary ${dati._id}`;
  detailsLink.textContent = 'Mostra Dettagli';

  const deleteLink = document.createElement('a');
  deleteLink.href = '#';
  deleteLink.className = 'btn btn-primary elimina';
  deleteLink.id = dati._id;
  deleteLink.textContent = 'Delete';

  // Add element on DOM
  cardBodyDiv.appendChild(titleH5);
  cardBodyDiv.appendChild(descriptionP);
  cardBodyDiv.appendChild(priceP);
  cardBodyDiv.appendChild(idP);
  cardBodyDiv.appendChild(detailsLink);
  cardBodyDiv.appendChild(deleteLink);

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

 
  const cardFind = document.getElementById("cardFind"); // Sostituire con l'id corretto

  // add new card on html
  cardFind.appendChild(cardDiv);
};


// export const cardCreater = (dati) => {

//   cardFind.innerHTML += `
//     <div class="card col-3 mx-3 my-3" style="width: 18rem;">
//     <img src="${dati.imageUrl}" class="card-img-top col-3" alt="...">
//     <div class="card-body">
//     <h5 class="card-title">${dati.name}</h5>
//     <p class="card-text">${dati.description}</p>
//     <p class="card-text">$ ${dati.price}</p>
//     <p class="card-text">id: ${dati._id}</p>
//     <a href="detail.html?id=${dati._id}" class="btn btn-primary ${dati._id} ">Mostra Dettagli</a>
//     <a href="#" class="btn btn-primary elimina" id="${dati._id}">Delete</a>
//       </div>`;
// };

export const createCardDetail = (data) => {
  // Select existing elements in the DOM
  let cardDetail = document.getElementById("cardDetail");
  let sideBar = document.querySelector(".sideBar");
  let detailLogo = document.querySelector(".navbar-brand");

  // Create HTML elements
  const img = document.createElement('img');
  img.src = data.imageUrl;
  img.className = 'card-img-top col-3';
  img.alt = '...';

  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = 'card-body';

  const titleH5 = document.createElement('h5');
  titleH5.className = 'card-title mx-5 my-5';
  titleH5.textContent = `Title: ${data.name}`;

  const descriptionP = document.createElement('p');
  descriptionP.className = 'card-text mx-5 my-5';
  descriptionP.textContent = `Description: ${data.description}`;

  const logoImg = document.createElement('img');
  logoImg.src = data.imageUrl;
  logoImg.alt = '';

  // Clear existing elements in the DOM
  cardDetail.innerHTML = '';
  sideBar.innerHTML = '';
  detailLogo.innerHTML = '';

  // Append created elements to the DOM
  cardDetail.appendChild(img);
  cardDetail.appendChild(cardBodyDiv);

  cardBodyDiv.appendChild(titleH5);
  cardBodyDiv.appendChild(descriptionP);

  detailLogo.appendChild(logoImg);
};


// export const createCardDetail=(dati)=>{
//   let cardDetail=document.getElementById("cardDetail")
//   let sideBar=document.querySelector(".sideBar")
//   let detailLogo=document.querySelector(".navbar-brand")
// cardDetail.innerHTML=`
// <img src="${dati.imageUrl}" class="card-img-top col-3" alt="...">
// <div class="card-body">`;
// sideBar.innerHTML=`
// <h5 class="card-title mx-5 my-5">Title: ${dati.name}</h5>
// <p class="card-text mx-5 my-5">Description: ${dati.description}</p>
// `
// detailLogo.innerHTML=`
// <img src="${dati.imageUrl}" alt="">`
// }
