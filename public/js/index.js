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
    imageLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AUPxIYZdu2tIpo8IdbxsFwHaHa%26pid%3DApi&f=1&ipt=a2492592b8474bf94be1c11c7d09f4cafe1230a41f1a6d3e860c46621b4ebf03&ipo=images",
  },
  {
    id: 10,
    name: "Submit you'r game!",
    downloadLink: "https://t.me/+Gbp5wNg7WHFjN2Ey",
    platformGame: "PC, PS4, Xbox One, Switch , Mobile",
    imageLink: "https://yastatic.net/s3/games-static/static-data/images/promo/video.png",
  },
  {
    id: 11,
    name: "CountryBattles Offical Game✅",
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
    downloadLink: "https://drive.google.com/file/d/1WBgV18nHYCJAAJVDnqoqh4paImB8jqx9/view?usp=sharing",
    platformGame: "Mobile",
    imageLink: "https://static-cdn.jtvnw.net/ttv-boxart/494655_IGDB-272x380.jpg",
  },
  {
    id: 15,
    name: "TLD+ Offical Game✅ ",
    downloadLink: "https://drive.google.com/file/d/19irN90pVEvs9YKoeulIQFkiONEQtdQG4/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://img.itch.zone/aW1nLzE1OTkyOTM1LnBuZw==/315x250%23c/eqMUje.png",
  },
  {
    id: 16,
    name: "TLD Offical Game✅",
    downloadLink: "https://ox2dr.itch.io/the-last-day-of-the-world",
    platformGame: "Mobile",
    imageLink: "https://img.itch.zone/aW1nLzE0NzIwNDI2LmpwZw==/315x250%23c/I9gpVf.jpg",
  },
  {
    id: 17,
    name: "Tank Of Strike Offical Game✅ ",
    downloadLink: "https://drive.google.com/file/d/17Vg8xSZezl7rNoQdPhBIeV6r1bwvLl2v/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://img.itch.zone/aW1nLzE3OTAwNzQ4LmpwZw==/original/hcJI9t.jpg",
  },
  {
    id: 18, 
    name: "UST 25           Offical Game✅ ",
    downloadLink: "https://drive.google.com/file/d/1BYAC1ZUuxkGhBbFKSPPCMJXICi6sI2_t/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://img.itch.zone/aW1nLzE4MDc1NjUzLmpwZw==/315x250%23c/feqsvY.jpg",
  },
  {
    id: 19, 
    name: "Progressbar95",
    downloadLink: "https://drive.google.com/file/d/1IJ0lxm4LlLuNSOpiPceTqruyAxmLrPDX/view?usp=sharing",
    platformGame: "PC",
    imageLink: "data:image/jpeg;base64,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",
  },
  {
    id: 20,
    name: "GTA VICE CITY",
    downloadLink: "https://drive.google.com/file/d/1bjjGZzZxj7VwoD1S_IJmG-Y0h8copqq9/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://i.pinimg.com/originals/fd/31/3f/fd313ff20c9a57bedee9ed58512a0c13.png",
  },
  
  {
    id: 21,
    name: "POCKET ROGUES",
    downloadLink: "https://drive.google.com/file/d/1FH7wNtA5wLm_8Drpsinb8sNxy0YkRs4Z/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.V2NkPaKweYEs2gwPWSC9awHaHa%26pid%3DApi&f=1&ipt=c1cdf017fd84f43afba648fe9e2ec2ec38d98021feb2f51fe7c19cc00ba5337a&ipo=images",
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

cardsFromServer.forEach((card) => {
  renderCard(card);
});


