const cards = document.querySelector('.cards');

console.log(cards);

import cardsFromServer from "./cards";

const path = window.location.pathname;

console.log(path);

function renderCard(content) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-header">
    <img src="${content.imageLink}" alt="${content.name}" />
    </div>
    
    <div class="card-description">
      <h2>${content.name}</h2>
      <p>Plataforma: ${content.platformGame}</p>
        <a class="btn" href="${content.downloadLink}" target="_blank">Download</a>
        <a class="btn" href="/details-page.html?id=${content.id}" > details</a>

    </div>
  `;
  return card;
};

cardsFromServer.forEach((card) => {
  renderCard(card);
});


