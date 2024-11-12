const bodyDetails = document.querySelector("body");
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");
const cardsFromServer = [
  {
    id: 1,
    name: "Minecraft ",
    rating: "9",
    system:
      "The minimum system requirements for Minecraft are nothing to scoff at. While you only need 2 GB of RAM to pass, your PC will need at least a DX 11.0 GPU, such as an Intel HD Graphics 4000, a GeForce 400 series card, or a Radeon HD 7000 series card",
    description:
      "In Minecraft, players explore a procedurally generated, three-dimensional world with virtually infinite terrain made up of voxels. Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.",
    downloadLink:
      "https://drive.google.com/file/d/15dx8xQDaEMCktl7bxmcOQEA4K_R0NIaZ/view?usp=sharing",
    platformGame: "Mobile",
    imageLink:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg",
  },
  {
    id: 2,
    name: "Far Cry 1",
    rating: "8.8",
    description:
      "The game's story follows a retired U.S. Army Special Forces soldier stranded on a mysterious archipelago. He is searching for a female journalist named Valerie Constantine, after she went missing when their boat was destroyed by mercenaries.",
    system:
      "To run the original Far Cry system requirements, you will need a modern graphics card GPU, an Intel Core 2 Duo E8400 CPU, 256MB of RAM, and 4GB of free HD space. In terms of game file size, you will need at least 4 GB of free disk space available.",
    downloadLink:
      "https://drive.google.com/file/d/1_1EK5A9Gb6LnC_cxqSc9VRFDebp3I5hW/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://i.ytimg.com/vi/H5HVzRDF9wI/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "NFS Underground 1+2",
    rating: "8.3",
    description:
      "Need for Speed: Underground completely redesigned the series' formula with a heavy emphasis on tuner culture and a storyline-driven career mode. All races take place in a generic city at night, featuring vehicles associated with the import scene rather than exotic cars.",
    system:
      "Need for Speed: Underground 2 System Requirements (Minimum) CPU: Pentium III or Athlon XP. CPU SPEED: 933 mhz. RAM: 256 MB. VIDEO CARD: AGP Video Card with 32 MB and a DirectX 8.1 compatible driver (GeForce2+ /Radeon 7500+) TOTAL VIDEO RAM: 32 MB.",
    downloadLink:
      "https://drive.google.com/file/d/1xXRaXIYh9acaVDPJTAMcQYeyIafqV3X9/view?usp=sharing",
    platformGame: "PC + Playstation 2",
    imageLink:
      "https://assets-prd.ignimgs.com/2022/02/08/nfsunderground-sq-1644282923090.jpg",
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    rating: "8.5",
    description:
      "After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.",
    system:
      "To run the Red Dead Redemption 2 system requirements, you will need an NVIDIA GeForce GTX 770 GPU, an Intel Core i5-2500K CPU, 8GB of RAM, and 150GB of space. Saddle up folks, and see if your PC can run the Red Dead Redemption 2 PC requirements.",
    downloadLink:
      "https://drive.google.com/file/d/1i0YzYaqy3TwyMQGoOoDXxjWwBvYMYyTc/view?usp=sharing",
    platformGame: "PC, PS4, Xbox One",
    imageLink:
      "https://static01.nyt.com/images/2018/11/25/opinion/25SUDERMAN/25SUDERMAN-videoSixteenByNineJumbo1600.jpg",
  },
  {
    id: 5,
    name: "My Summer Car",
    rating: "7.1",
    description:
      "My Summer Car is the ultimate car owning, building, fixing, tuning, maintenance AND permadeath life survival simulator. You start the game with hundreds of loose parts and assemble both car and engine. Recent Reviews: Very Positive (1,646) - 94% of the 1,646 user reviews in the last 30 days are positive.",
    system:
      "The minimum memory requirement for My Summer Car is 6 GB of RAM installed in your computer. If possible, make sure your have 8 GB of RAM in order to run My Summer Car to its full potential. An Intel Core 2 Duo Q6867 CPU is required at a minimum to run My Summer Car.",
    downloadLink:
      "https://drive.google.com/file/d/1YVY20rmwYF7j4Se1Ory8_CM_mHvDj6Tu/view?usp=sharing",
    platformGame: "PC",
    imageLink: "https://gepig.com/game_cover_bg_1190w/3918.jpg",
  },
  {
    id: 6,
    name: "Besiege",
    rating: "7.5",
    description:
      "to surround a place, esp. with an army, to prevent people or supplies from getting in or out: fig.",
    system:
      "OS: Windows 10. Processor: 4Ghz Quad Core. Memory: 8 GB RAM. Graphics: 3 GB Dedicated VRAM.",
    downloadLink:
      "https://drive.google.com/file/d/1sE3UW3fN66EknoSNHqDhRSnpvgLSPCZp/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/346010/header.jpg?t=1728488976",
  },
  {
    id: 7,
    name: "The Long Drive",
    rating: "7.0",
    description:
      "This is a road trip game in an almost infinite random generated desert. The focus is on freedom, driving, exploration and immersion. It has minimal car maintenance and survival elements.",
    system:
      "An Intel Core 2 Duo Q6867 CPU is required at a minimum to run The Long Drive. Whereas, an Intel Core i5-1300F is recommended in order to run it. You will need at least 700 MB of free disk space to install The Long Drive. The Long Drive will run on PC system with Windows 10 64bit and upwards.",
    downloadLink:
      "https://drive.google.com/file/d/1kGAjQsfxg7wrR_WQu1I6mvG5gV8GD3WX/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1017180/header.jpg?t=1720990941",
  },
  {
    id: 8,
    name: "Yehor Sandbox Offical Game✅",
    rating: "5.0",
    description:
      "GOOD SANDBOX GAME FOR LOW PHONES IN THIS SANDBOX GAME YOU HAVE 20 ITEMS AND YOU PLAY AS A CAT",
    system: "Phone with android 6 or better",
    downloadLink:
      "https://drive.google.com/file/d/15dx8xQDaEMCktl7bxmcOQEA4K_R0NIaZ/view?usp=sharing",
    platformGame: " Mobile",
    imageLink:
      "https://img.itch.zone/aW1nLzE1MTQ3Mzc3LmpwZw==/315x250%23c/VMFpgl.jpg",
  },
  {
    id: 9,
    name: "Here can be you'r ads !",
    rating: "10",
    description: "order a ads",
    system: "all",
    downloadLink: "https://t.me/+M7y54QKSCv1lODUy",
    platformGame: "PC, Switch, PS4, Xbox One, Mobile",
    imageLink:
      "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/ads-on-internet.png?width=550&name=ads-on-internet.png",
  },
  {
    id: 10,
    name: "Submit you'r game!",
    rating: "10",
    description: "submit you'r game",
    system: "all",
    downloadLink: "https://t.me/+Gbp5wNg7WHFjN2Ey",
    platformGame: "PC, PS4, Xbox One, Switch , Mobile",
    imageLink:
      "https://play-lh.googleusercontent.com/eYnJW3Ig941yA1fxhv6dAxsEx0Iq8pMKUt2fXU6K_qB20x_0mFx7niQv6VazV9PFSRJZgP9TewuV=w648-h364-rw",
  },
  {
    id: 11,
    name: "CountryBattles Offical Game✅",
    rating: "5.7",
    description: "brawl of countrys ",
    system: "android 9 or better",
    downloadLink:
      "https://drive.google.com/file/d/1ESxCqI1xwPMQseB_97gedvwuzK_D7CMB/view?usp=sharing",
    platformGame: "Mobile",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Polandball.png",
  },
  {
    id: 12,
    name: "Norbert's diary Offical Game✅ ",
    rating: "7.2",
    description:
      "Norbert's Diary is a single-player indie horror game with simulator elements, in which the player imagines himself as a young Norbert who decided to rent a gas station in the wilderness of Adygea. You have a difficult choice - to lower prices or raise them? In addition to threats from bankruptcy, you may be killed or kidnapped. But do you need it? Of course not.",
    system:
      "Requires 64-bit processor and operating system  Windows 10 or higher, 64-bit 2.6 GHz, 4 threads and 2 cores or similar  6 GB OP  GeForce GTX 1650  version 10  3 GB available space ",
    downloadLink:
      "https://drive.google.com/file/d/1GNASbXLgmnGgrnxjppW0myHPemrdp0bE/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co8k12.webp",
  },
  {
    id: 13,
    name: "Granny",
    rating: "7.3",
    description:
      "a grandmother. an elderly woman. a fussy person. Chiefly Midland and Southern U.S. a nurse or midwife.",
    system:
      "The minimum memory requirement for Granny is 4 GB of RAM installed in your computer. To play Granny you will need a minimum CPU equivalent to an Intel Core i5-750. You will need at least 1 GB of free disk space to install Granny. Provided that you have at least an ATI Radeon HD 5770 graphics card you can play the game.",
    downloadLink:
      "https://drive.google.com/file/d/1Yoz9N8y3N4BjnFUdXtynR-dCylSK7385/view?usp=sharing",
    platformGame: " Mobile",
    imageLink:
      "https://play-lh.googleusercontent.com/XPM8u_fQrERAQFNp1byQgCphu6_q_WSrJutTm2PF9iQBYbOhVu3ubliUxHaoZVdhyro=w526-h296-rw",
  },
  {
    id: 14,
    name: "Ravenfield",
    rating: "7.4",
    description:
      "Ravenfield consists of multiple team game modes that revolve around capturing flags on a given map, and gaining points by killing members of the enemy team. The game is inspired by other multiplayer first-person shooter games such as Battlefield and Call of Duty.",
    system: "android 9 of better",
    downloadLink:
      "https://drive.google.com/file/d/1WBgV18nHYCJAAJVDnqoqh4paImB8jqx9/view?usp=sharing",
    platformGame: "Mobile",
    imageLink:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/636480/capsule_616x353.jpg?t=1664197939",
  },
  {
    id: 15,
    name: "TLD+ Offical Game✅ ",
    rating: "5.1",
    description:
      "THE GAME IS THE CONTINUATION OF THE HISTORY OF THE LAST DAY OF THE WORLD+. Here, on a new map, with new 3D graphics, new monsters, new modes and a choice of difficulty, you have to go through the entire game. There are 3 difficulty modes in total, the atmosphere of the game is similar to Half Life 2 and Postal.",
    system:
      "the minimum memory requirment is 1 gb , RAM 8GB , intel core i5 3770 , nvidia gt 650QM",
    downloadLink:
      "https://drive.google.com/file/d/19irN90pVEvs9YKoeulIQFkiONEQtdQG4/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://img.itch.zone/aW1nLzE1OTkyOTM1LnBuZw==/315x250%23c/eqMUje.png",
  },
  {
    id: 16,
    name: "TLD Offical Game✅",
    rating: "4.6",
    description: "left for dead 2 but bed ",
    system: "android 9 or better",
    downloadLink:
      "https://drive.google.com/file/d/11qBBew2VJaDSh5QCa9IZ4D28HsXDmnT0/view?usp=sharing",
    platformGame: "Mobile",
    imageLink:
      "https://img.itch.zone/aW1nLzE0NzIwNDI2LmpwZw==/315x250%23c/I9gpVf.jpg",
  },
  {
    id: 17,
    name: "Tank Of Strike Offical Game✅ ",
    rating: "4.3",
    description: "world of tanks but bed ",
    system:
      "the minimum memory requirment is 1 gb , RAM 8GB , intel core i5 3770 , nvidia gt 650QM",
    downloadLink:
      "https://drive.google.com/file/d/17Vg8xSZezl7rNoQdPhBIeV6r1bwvLl2v/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://img.itch.zone/aW1nLzE3OTAwNzQ4LmpwZw==/original/hcJI9t.jpg",
  },
  {
    id: 18,
    name: "UST 25           Offical Game✅ ",
    rating: "6.9",
    description:
      "UST 25 is a fast-paced football game where players can manage their teams and compete in intense football matches. The game offers exciting gameplay that combines realistic player movements and quick changes in game situations on the field. Strive for victory, develop tactics and defeat your opponents in every match!",
    system:
      "the minimum memory requirment is 1 gb , RAM 8GB , intel core i5 3770 , nvidia gt 650QM",
    downloadLink:
      "https://drive.google.com/file/d/1BYAC1ZUuxkGhBbFKSPPCMJXICi6sI2_t/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://img.itch.zone/aW1nLzE4MjAxMTY0LmpwZWc=/315x250%23c/LC5gR%2F.jpeg",
  },

  {
    id: 19,
    name: "progressbar95",
    rating: "8",
    description:
      "Progressbar95 is a unique nostalgic game. It transforms old interface elements: buttons, panels, windows, and icons into game elements! Fight against office assistants, calculators, intrusive pop-up windows, and various glitches. Fill the progress bar to win. Collect points, unlock upgrades to make your virtual computer faster and more powerful! A great retro time-killer!",
    system:
      "Memory: 8 GB Graphics Card: AMD Radeon HD 6250  CPU: Intel Core i5-12400T  File Size: 250 MB OS:Windows10",
    downloadLink: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
    platformGame: "PC",
    imageLink:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e34f4fe7-a442-4f9b-92dd-1d89335f6a62/deb2xub-86a13a2b-b234-4779-8141-822b8996ee78.png/v1/fill/w_1192,h_670,q_70,strp/progressbar95_pack_by_centurokyo_ya_deb2xub-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2UzNGY0ZmU3LWE0NDItNGY5Yi05MmRkLTFkODkzMzVmNmE2MlwvZGViMnh1Yi04NmExM2EyYi1iMjM0LTQ3NzktODE0MS04MjJiODk5NmVlNzgucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J5FJUqVd8tBNoUmICdjc6MsY8vaVkPasirXC0HNQkgQ",
  },
  {
    id: 20,
    name: "GTA VICE CITY",
    rating: "9.6",
    description:
      "The open world design lets the player freely roam Vice City, consisting of two main islands. The game's plot is based on multiple real-world people and events in Miami such as Cubans, Haitians, and biker gangs, the 1980s crack epidemic, the Mafioso drug lords of Miami, and the dominance of glam metal.",
    system:
      "Processor: 800 MHz Intel Pentium III or 800 MHz AMD Athlon or 1.2GHz Intel Celeron or 1.2 GHz AMD Duron processor. Memory: 128 MB of RAM. Graphics: 32 MB video card with DirectX 9.0 compatible drivers ( GeForce or better) DirectX Version: Microsoft DirectX® 9.0.",
    downloadLink:
      "https://drive.google.com/file/d/1bjjGZzZxj7VwoD1S_IJmG-Y0h8copqq9/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0301d4689fa8e170ceefe118a18b3afb.jpg",
  },
  {
    id: 21,
    name: "Pocket Rogues",
    rating: "8.0",
    description:
      "Pocket Rogues is a dynamic 2D-Roguelike with Action-RPG elements completely in real time. Raid endless dungeons, increase the power of your Guild and develop your own heroes!",
    system:
      "OS : WINDOWS 7 , Processor:Intel Pentium , RAM:2048 MB OP , Video card:GeForce 820",
    downloadLink:
      "https://drive.google.com/file/d/1FH7wNtA5wLm_8Drpsinb8sNxy0YkRs4Z/view?usp=sharing",
    platformGame: "PC",
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HH_O5u8jp-WNgsWHwVBqsgAAAA%26pid%3DApi&f=1&ipt=e8a512b68daa78e7007ae9b1f2ca0425ab09240757fbc1258925dc85ef199ef6&ipo=images",
  },
  {
    id: 23,
    name: "Hollow Knight",
    downloadLink: "https://hollowknight.com/",
    platformGame: "PC, PS4, Xbox One, Switch",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png",
  },
  {
    id: 24,
    name: "Monster Hunter: World",
    downloadLink: "https://www.monsterhunter.com/world/",
    platformGame: "PC, PS4, Xbox One",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg",
  },
  {
    id: 25,
    name: "Fall Guys: Ultimate Knockout",
    downloadLink: "https://fallguys.com/",
    platformGame: "PC, PS4, PS5, Xbox One, Switch",
    imageLink:
      "https://img-grouvee-com.b-cdn.net/upload/cache/c9/4c/c94c6dd9abc558d6a7af64b612a4d553.jpg",
  },
  {
    id: 26,
    name: "Fall Guys: Ultimate Knockout",
    downloadLink: "https://fallguys.com/",
    platformGame: "PC, PS4, PS5, Xbox One, Switch",
    imageLink:
      "https://img-grouvee-com.b-cdn.net/upload/cache/c9/4c/c94c6dd9abc558d6a7af64b612a4d553.jpg",
  },
];

function renderDetails(content) {
  const details = document.createElement("div");
  details.classList.add("view");
  details.innerHTML = `
      <div class="pre">
      <div class="wrapper-img">
      <img class="pre-bunner" src="${content.imageLink}" />
      </div>
      <h1>${content.name}</h1>
      <div class="characteristic">
        <a
          class="btn"
          href="${content.downloadLink}"
          target="_blank"
          >download</a
        >
        

        <h1>${content.rating}/10</h1>
      </div>
    </div>
    <h1>
    ${content.description}
    </h1>
    <div class="second">
      <h1>System required:</h1>
      <h1>${content.system}</h1>
 `;
  bodyDetails.appendChild(details);
}
const card = cardsFromServer.find((card) => card.id === Number(cardId));
renderDetails(card);
