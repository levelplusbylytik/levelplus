const cards = document.querySelector(".cards");
const cardsFromServer = [
  {
    id: 1,
    name: "Minecraft ",
    downloadLink: "https://drive.google.com/file/d/1i0Mo71ERtnHjDAetHBMTcd9Ki1On4cr-/view?usp=sharing",
    platformGame: "Mobile",
    imageLink: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23BR5V/807627b274ee47a2a4e20bc010ec4d5e.png/f/minecraft-java-bedrock-edition.png",
  },
  {
    id: 2,
    name: "Far Cry 1",
    categorys:"shooter",
    downloadLink: "https://drive.google.com/file/d/1_1EK5A9Gb6LnC_cxqSc9VRFDebp3I5hW/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://m.media-amazon.com/images/I/71hBqz8HYTL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "NFS Underground 1+2",
    downloadLink: "https://drive.google.com/file/d/1xXRaXIYh9acaVDPJTAMcQYeyIafqV3X9/view?usp=sharing",
    platformGame: "PC + Playstation 2",
    imageLink: "https://assets-prd.ignimgs.com/2022/02/08/nfsunderground-sq-1644282923090.jpg",
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    categorys:"shooter",
    downloadLink: "https://drive.google.com/file/d/1i0YzYaqy3TwyMQGoOoDXxjWwBvYMYyTc/view?usp=sharing",
    platformGame: "PC, PS4, Xbox One",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
  },
  {
    id: 5,
    name: "My Summer Car",
    downloadLink: "https://drive.google.com/file/d/1YVY20rmwYF7j4Se1Ory8_CM_mHvDj6Tu/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fiRkAw7gOrgJVFZDTPzGrTUZ51_-uw9Siw&s",
  },
  {
    id: 6,
    name: "Besiege",
    downloadLink: "https://drive.google.com/file/d/1sE3UW3fN66EknoSNHqDhRSnpvgLSPCZp/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://howlongtobeat.com/games/23963_Besiege.jpg",
  },
  {
    id: 7,
    name: "The Long Drive",
    downloadLink: "https://drive.google.com/file/d/1kGAjQsfxg7wrR_WQu1I6mvG5gV8GD3WX/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://newzoo.com/wp-content/uploads/api/games/artworks/game--the-long-drive.jpg",
  },
  {
    id: 8,
    name: "Yehor Sandbox Offical Game✅",
    downloadLink: "https://drive.google.com/file/d/15dx8xQDaEMCktl7bxmcOQEA4K_R0NIaZ/view?usp=sharing",
    platformGame: " Mobile",
    imageLink: "https://img.itch.zone/aW1nLzE1MTQ3Mzc3LmpwZw==/315x250%23c/VMFpgl.jpg",
  },
  {
    id: 9,
    name: "Here can be you'r ads !",
    downloadLink: "https://t.me/+M7y54QKSCv1lODUy",
    platformGame: "PC, Switch, PS4, Xbox One, Mobile",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPtvwppzRPe_HLwdlfSr0HQFRrNrlLbexhQ&s",
  },
  {
    id: 10,
    name: "Submit you'r game!",
    downloadLink: "https://t.me/+Gbp5wNg7WHFjN2Ey",
    platformGame: "PC, PS4, Xbox One, Switch , Mobile",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQizBwa1JX0hWg0UNA_ZjHvqK7OVRFBH60jQ&s",
  },
  {
    id: 11,
    name: "CountryBattles Offical Game✅",
    categorys:"shooter",
    downloadLink: "https://drive.google.com/file/d/1u46yA6OItx0vi14lVDSthrKq21YnlvJ6/view?usp=sharing",
    platformGame: "Mobile",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Polandball.png",
  },
  {
    id: 12,
    name: "Norbert's diary Offical Game✅ ",
    downloadLink: "https://drive.google.com/file/d/1GNASbXLgmnGgrnxjppW0myHPemrdp0bE/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8k12.webp",
  },
  {
    id: 13,
    name: "Granny",
    categorys:"horror",
    downloadLink: "https://drive.google.com/file/d/1kuFhufRApN8HoDT5wAj7tRB2hcgNql_8/view?usp=sharing",
    platformGame: " Mobile",
    imageLink: "https://play-lh.googleusercontent.com/yT_LBq_tyKeIDohKDsqN_Qt18jGIPUYIxY2C-1-E2YA9Qd60uZW08pua17qBmIiDPA=w240-h480-rw",
  },
  {
    id: 14,
    name: "Ravenfield",
    categorys:"shooter",
    downloadLink: "https://drive.google.com/file/d/1WBgV18nHYCJAAJVDnqoqh4paImB8jqx9/view?usp=sharing",
    platformGame: "Mobile",
    imageLink: "https://static-cdn.jtvnw.net/ttv-boxart/494655_IGDB-272x380.jpg",
  },
  {
    id: 15,
    name: "TLD+ Offical Game✅ ",
    categorys:"shooter",
    downloadLink: "https://drive.google.com/file/d/19irN90pVEvs9YKoeulIQFkiONEQtdQG4/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://img.itch.zone/aW1nLzE1OTkyOTM1LnBuZw==/315x250%23c/eqMUje.png",
  },
  {
    id: 16,
    name: "TLD Offical Game✅",
    categorys:"shooter",
    downloadLink: "https://ox2dr.itch.io/the-last-day-of-the-world",
    platformGame: "Mobile",
    imageLink: "https://img.itch.zone/aW1nLzE0NzIwNDI2LmpwZw==/315x250%23c/I9gpVf.jpg",
  },
  {
    id: 17,
    name: "Tank Of Strike Offical Game✅ ",
    categorys:"shooter",
    downloadLink: "https://drive.google.com/file/d/17Vg8xSZezl7rNoQdPhBIeV6r1bwvLl2v/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://img.itch.zone/aW1nLzE3OTAwNzQ4LmpwZw==/original/hcJI9t.jpg",
  },
  {
    id: 18, 
    name: "UST 25           Offical Game✅ ",
    downloadLink: "",
    platformGame: "PC",
    imageLink: "https://img.itch.zone/aW1nLzE4MDc1NjUzLmpwZw==/315x250%23c/feqsvY.jpg",
  },
 
  
];

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
  cards.appendChild(card);
};

const shooters = cardsFromServer.filter(shooter => shooter.categorys ===  "shooter" )
shooters.forEach((card) => {
  renderCard(card);
});


