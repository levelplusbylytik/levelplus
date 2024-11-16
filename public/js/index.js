alert("!!☢ВНИМАНИЕ В НАШЕМ СООБЩЕСТВЕ ПРОГОЛОСОВАЛИ ЗА РАННИЙ ВЫХОД САЙТА С БАГОМ В ОПИСАНИИ И ПОИСКОВИКЕ И КОСЫМ ИНТЕРФЕЙСОМ НА ТЕЛЕФОНЕ НАШ ТЕЛЕГРАМ КАНАЛ https://t.me/lysikgames ✅ДЛЯ ПЕРЕХОДА НА СТРАНИЦУ САЙТА С ИГРАМИ НАЖМИТЕ ОК✅ ☢ ");
const cards = document.querySelector('.cards');

console.log(cards);

// import cardsFromServer from "/cards.js";

const path = window.location.pathname;

console.log(path);

function renderCard(content) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-header">che
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


