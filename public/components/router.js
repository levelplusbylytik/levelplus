import cardsFromServer from "/cards.js";

// Define routes as a mapping of paths to functions
const routers = {
  "/": () => contentRender(),
  "/racing": () => contentRender("racing"),
  "/adventures": () => contentRender("adventures"),
  "/sports": () => contentRender("sports"),
  "/horrors": () => contentRender("horrors"),
  "/shooters": () => contentRender("shooter"),
  "/details-page": (params) => detailsPageRender(params),
};
//Hellow

// Function to navigate to a specific path
const navigationTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const path = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);
  const render = routers[path] || (() => `<h1>404 page</h1>`);
  document.getElementById("cards").innerHTML = render(searchParams);
};

// Listen for popstate event to handle back/forward navigation
window.addEventListener("popstate", router);

const links = document.querySelectorAll("[data-link]");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigationTo(link.href);
  });
});

// Initialize routing on page load
document.addEventListener("DOMContentLoaded", router);

function contentRender(category = "") {
  let result = "";

  const filteredCardsByCategory =
    category === ""
      ? cardsFromServer
      : cardsFromServer.filter((card) => card.categories === category);

      

  filteredCardsByCategory.forEach((c) => {
    const { imageLink, name, platformGame, downloadLink, id } = c;
    const card = `
    <div class="card">
      <div class="card-header">
    <img src="${imageLink}" alt="${name}" />
    </div>
    
    <div class="card-description">
      <h2>${name}</h2>
      <p>Platform: ${platformGame}</p>
        <a class="btn" href="${downloadLink}" target="_blank">Download</a>
        <a class="btn" href="/details-page?id=${id}" > details</a>

    </div>
    </div>
    `;

    result += card;
  });

  return result;
}

function detailsPageRender(params) {
  const id = params.get("id");
  const cardDetails = cardsFromServer.find((card) => card.id === Number(id));
  const { imageLink, name, downloadLink, rating, description, system } =
    cardDetails;

  return `
    <div class="view">
      <div class="pre">
        <div class="wrapper-img">
        <img class="pre-bunner" src="${imageLink}" />
        </div>
        <h1>${name}</h1>
      <div class="characteristic">
        <a
          class="btn"
          href="${downloadLink}"
          target="_blank"
          >download</a
        >
        <h1>${rating}/10</h1>
      </div>
      </div>
    <h1>${description}</h1>
      <div class="second">
        <h1>System required:</h1>
        <h1>${system}</h1>
      </div>
    </div>
  `;
}
