class Item {
  constructor(
    id,
    name,
    genre,
    runtime,
    rating,
    description,
    releaseDate,
    comingSoon,
    poster,
    trailer,
    preview
  ) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.runtime = runtime;
    this.rating = rating;
    this.description = description;
    this.releaseDate = releaseDate;
    this.comingSoon = comingSoon;
    this.poster = poster;
    this.trailer = trailer;
    this.preview = preview;
  }
}

const { createApp } = window.Vue;

const component = {
  data() {
    return {
      itemList: [
        new Item(
          "TLAT_nm_2022",
          "Thor Love and Thunder",
          "New",
          "1h32m",
          "+13",
          "Following the events of Avengers: Endgame (2019), Thor attempts to find inner peace, but must return to action and recruit Valkyrie, Korg, and Jane Foster who has become the Mighty Thor to stop Gorr the God Butcher from eliminating all gods.",
          "08-07-2022",
          true,
          "./src/images/love-and-thunder.png",
          "https://www.youtube.com/watch?v=tgB1wUcmbbw",
          "./src/videos/thor-love-and-thunder.mp4"
        ),
        new Item(
          "OBK_ns_2022",
          "Obi-Wan Kenobi",
          "New",
          "1 Season",
          "+13",
          "The Jedi Master contends with the consequences of his greatest defeat the downfall and corruption of his one-time friend and apprentice, Anakin Skywalker, who turned to the dark side as evil Sith Lord Darth Vader.",
          "07-05-2022",
          true,
          "./src/images/obi-wan-kenobi.png",
          "https://www.youtube.com/watch?v=TWTfhyvzTx0",
          "./src/videos/obi-wan.mp4"
        ),
        new Item(
          "JWD_nm_2022",
          "Jurassic World Dominion",
          "New",
          "1h32m",
          "+13",
          "The future of mankind hangs in the balance as humans and dinosaurs coexist following the destruction of Isla Nublar.",
          "10-06-2022",
          true,
          "./src/images/jurassic-world-3.png",
          "https://www.youtube.com/watch?v=fb5ELWi-ekk",
          "./src/videos/jurassic-world-dominion.mp4"
        ),
        new Item(
          "HOTD_ns_2022",
          "House of the Dragon",
          "New",
          "1 Season",
          "+13",
          "Set two hundred years before the events of Game of Thrones, the series chronicles the beginning of the end of House Targaryen, the events leading up to the Targaryen civil war, known as the 'Dance of the Dragons', and the war itself.",
          "21-08-2022",
          true,
          "./src/images/house-of-the-dragon.png",
          "https://www.youtube.com/watch?v=fNwwt25mheo",
          "./src/videos/house-of-the-dragon.mp4"
        ),

        new Item(
          "PB_sa_2013",
          "Peaky Blinders",
          "Action",
          "6 Seasons",
          "+18",
          "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
          "2013",
          false,
          "./src/images/peaky-blinders.jpg",
          "https://www.youtube.com/watch?v=jImOqxQ0kkM"
        ),
        new Item(
          "AOTD_ma_2021",
          "Army of the Dead",
          "Action",
          "2h 28m",
          "+18",
          "After a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble and venture into the quarantine zone in hopes of pulling off an impossible heist.",
          "2013",
          false,
          "./src/images/army-of-the-dead.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),
        new Item(
          "LDR_sa_2019",
          "Love, Death + Robots",
          "Action",
          "2 Seasons",
          "+18",
          "This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience.",
          "2019",
          false,
          "./src/images/love-death-robots.jpg",
          "https://www.youtube.com/watch?v=wUFwunMKa4E"
        ),
        new Item(
          "AC_ma_2016",
          "Assassin's Creed",
          "Action",
          "1h 55m",
          "+13",
          "With the help of technology, Callum learns that he is a descendant of a dangerous society. He travels back in time to learn about his ancestors and acquire skills to defeat an evil organisation.",
          "2016",
          false,
          "./src/images/assassins-creed.jpg",
          "https://www.youtube.com/watch?v=gfJVoF5ko1Y"
        ),
        new Item(
          "V_sa_2013",
          "Vikings",
          "Action",
          "6 Seasons",
          "+18",
          "Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who rises up to become a fearless warrior and commander of the Viking tribes with the support of his equally ferocious family.",
          "2013",
          false,
          "./src/images/vikings.jpg",
          "https://www.youtube.com/watch?v=9GgxinPwAGc"
        ),
        new Item(
          "DU_ma_2012",
          "Django Unchained",
          "Action",
          "2h 45m",
          "+16",
          "When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
          "2012",
          false,
          "./src/images/django-unchained.jpg",
          "https://www.youtube.com/watch?v=_iH0UBYDI4g"
        ),

        new Item(
          "S_mc_2001",
          "Shrek",
          "Comedy",
          "1h 30m",
          "PG 12",
          "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
          "2001",
          false,
          "./src/images/shrek.jpg",
          "https://www.youtube.com/watch?v=CwXOrWvPBPk"
        ),
        new Item(
          "TO_sc_2005",
          "The Office",
          "Comedy",
          "9 Seasons",
          "PG 12",
          "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
          "2005",
          false,
          "./src/images/the-office.jpg",
          "https://www.youtube.com/watch?v=2iKZmRR9AR4"
        ),
        new Item(
          "HR_mc_2007",
          "Hot Rod",
          "Comedy",
          "1h 28m",
          "PG 12",
          "Rod, a naif, slacker lives with his mother, brother and stepfather whose respect he craves. When his stepfather needs an operation, to raise funds, he plans to set a school-bus-jumping record.",
          "2007",
          false,
          "./src/images/hot-rod.jpg",
          "https://www.youtube.com/watch?v=yByhd7FAOug"
        ),
        new Item(
          "FIFF_sc_2015",
          "F is for Family",
          "Comedy",
          "5 Seasons",
          "+16",
          "Follow the Murphy family back to the 1970s, when kids roamed wild, beer flowed freely and nothing came between a man and his TV.",
          "2015",
          false,
          "./src/images/f-is-for-family.jpg",
          "https://www.youtube.com/watch?v=f2AmK5QVtbg"
        ),
        new Item(
          "KFH_mc_2004",
          "Kung Fu Hustle",
          "Comedy",
          "1h 38m",
          "+16",
          "An aspiring gangster pretends to be part of a notorious gang and tries to terrorise a neighbourhood. However, unknown to him, three martial arts experts live there and are ready to take him down.",
          "2004",
          false,
          "./src/images/kung-fu-hustle.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),
        new Item(
          "SF_sc_",
          "Space Force",
          "Comedy",
          "2 Seasons",
          "+13",
          "A group of people are tasked with establishing the U.S. Space Force.",
          "2020",
          false,
          "./src/images/space-force.jpg",
          "https://www.youtube.com/watch?v=bdpYpulGCKc"
        ),

        new Item(
          "GG_sr_2000",
          "Gilmore Girls",
          "Romance",
          "7 Seasons",
          "+13",
          "Lorelai Gilmore, an independent young woman, shares a close bond with her wilful daughter, Rory. However, her relationship with her own mother is strained.",
          "2000",
          false,
          "./src/images/gilmore-girls.jpg",
          "https://www.youtube.com/watch?v=HvbhPt0z4yE"
        ),
        new Item(
          "DKM_mr_2021",
          "Don't Kill Me",
          "Romance",
          "1h 30m",
          "+16",
          "After Mirta dies of a drug overdose with her lover, she resuscitates alone and discovers she's part of a violent world she never knew existed.",
          "2021",
          false,
          "./src/images/dont-kill-me.jpg",
          "https://www.youtube.com/watch?v=2iKZmRR9AR4"
        ),
        new Item(
          "OMB_sr_2018",
          "On My Block",
          "Romance",
          "4 Seasons",
          "+13",
          "In a rough Los Angeles neighborhood, four smart, funny and streetwise teens find their lifelong friendship tested as they begin high school. Watch Chapter One.",
          "2018",
          false,
          "./src/images/on-my-block.jpg",
          "https://www.youtube.com/watch?v=WlZvfarViqc"
        ),
        new Item(
          "AWA_mr_2015",
          "A Whisker Away",
          "Romance",
          "1h 45m",
          "PG",
          "Secretly in love with her classmate Kento, Miyo takes the help of a mysterious mask and transforms into a cat to get closer to him. However, trouble ensues when she begins to lose herself.",
          "2020",
          false,
          "./src/images/a-whisker-away.jpg",
          "https://www.youtube.com/watch?v=aXc9DVfLTGo"
        ),
        new Item(
          "LN_sr_2020",
          "Luna Nera",
          "Romance",
          "1 Season",
          "+16",
          "In 17th-century Italy, a teenage midwife accused of witchcraft must choose between fulfilling her powerful destiny and a star-crossed love.",
          "2020",
          false,
          "./src/images/luna-nera.jpg",
          "https://www.youtube.com/watch?v=H4oLu4cP7h4"
        ),
        new Item(
          "TPD_mr_2019",
          "Forrest Gump",
          "Romance",
          "2h 23m",
          "+13",
          "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
          "1994",
          false,
          "./src/images/forrest-gump.jpg",
          "https://www.youtube.com/watch?v=Hld-7oBn3Rk"
        ),

        new Item(
          "LPVA_mh_2015",
          "Lake Placid Vs Anaconda",
          "Horror",
          "1h 31m",
          "+16",
          "Genetically modified anacondas and giant crocodiles escape captivity and enter a nearby lake. When the two massive creatures fight, the sheriff tries to prevent the town from being destroyed.",
          "2015",
          false,
          "./src/images/lp-vs-a.jpg",
          "https://www.youtube.com/watch?v=u_AIV9c0FWc"
        ),
        new Item(
          "ST_sh_2016",
          "Stranger Things",
          "Horror",
          "3 Seasons",
          "+16",
          "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
          "2016",
          false,
          "./src/images/stranger-things.jpg",
          "https://www.youtube.com/watch?v=mnd7sFt5c3A"
        ),
        new Item(
          "TCM_mh_2022",
          "Texas Chainsaw Massacre",
          "Horror",
          "1h 23m",
          "+18",
          "Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.",
          "2022",
          false,
          "./src/images/texas-chainsaw-massacre.jpg",
          "https://www.youtube.com/watch?v=zcI6SFiK_yk"
        ),
        new Item(
          "TWD_sh_2010",
          "The Walking Dead",
          "Horror",
          false,
          "31-10-2010",
          "./src/images/walking-dead.jpg",
          "https://www.youtube.com/watch?v=R1v0uFms68U"
        ),
        new Item(
          "H_mh_2016",
          "Hush",
          "Horror",
          false,
          "12-03-2016",
          "./src/images/hush.jpg",
          "https://www.youtube.com/watch?v=H4oLu4cP7h4"
        ),
        new Item(
          "AVED_sh_2015",
          "Ash vs Evil Dead",
          "Horror",
          false,
          "31-10-2015",
          "./src/images/ash-vs-evil-dead.jpg",
          "https://www.youtube.com/watch?v=-Yq3jeOmxSk"
        ),
      ],
      // comingSoon: [],
    };
  },

  computed: {
    comingSoonList() {
      return this.itemList.filter((item) => {
        return item.comingSoon === true;
      });
    },

    availableList() {
      return this.itemList.filter((item) => {
        return item.comingSoon === false;
      });
    },

    actionList() {
      return this.itemList.filter((item) => {
        return item.genre === "Action";
      });
    },

    comedyList() {
      return this.itemList.filter((item) => {
        return item.genre === "Comedy";
      });
    },

    romanceList() {
      return this.itemList.filter((item) => {
        return item.genre === "Romance";
      });
    },

    horrorList() {
      return this.itemList.filter((item) => {
        return item.genre === "Horror";
      });
    },
  },

  /* html */
  template: `
    <header id="myHeader">
    <a href="./index.html" class="netflix-logo"><img src="./src/images/netflix.png" alt="Netflix logo"/></a>
    <ul class="navigation-list">
      <li>Home</li>
      <li><a href="./pages/series.html">Series</a></li>
      <li><a href="./pages/films.html">Films</a></li>
      <li><a href="./pages/my-list.html">My List</a></li>
    </ul>
    <div class="search">
      <input type="search" placeholder="Titles, people, genres" id="search"/>
      <i class="fa fa-search"></i>
    </div>
  </header>

  <main>
    <section class="banner" v-for="(item, index) in comingSoonList">
      <video class="bg" autoplay muted loop>
      <source :src="item.preview" type="video/mp4">
      </video>
      <div class="content">
        <img :src="item.poster" class="movieTitle" />
        <p>{{ item.description }}</p>
        <div class="buttons">
          <button class="button play"><a :href="item.trailer" target="_blank"><i class="fa fa-play"></i> Play</a></button>
          <button class="button info" id="myBtn"><i class="fa fa-plus"></i> More info</button>
        </div>
      </div>
    </section>

    <section id="content-grid">
      <div class="container-heading">Action</div>
      <div class="container">
        <div class="box" v-for="(item, index) in actionList" :key="item.id">
          <img class="bg" v-bind:src="item.poster" />
        </div>
      </div> 

      <div class="container-heading">Comedy</div>
      <div class="container">
        <div class="box" v-for="(item, index) in comedyList" :key="item.id">
          <img class="bg" v-bind:src="item.poster" />
        </div>
      </div>

      <div class="container-heading">Romance</div>
      <div class="container">
        <div class="box" v-for="(item, index) in romanceList" :key="item.id">
          <img class="bg" v-bind:src="item.poster" />
        </div>
      </div>

      <div class="container-heading">Horror</div>
      <div class="container">
        <div class="box" v-for="(item, index) in horrorList" :key="item.id">
          <img class="bg" v-bind:src="item.poster" />
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="social-links">
      <a href="https://www.instagram.com/oliver.vermeulen/" class="social-link" target="_blank"><i class="fab fa-instagram icon" alt="Instagram"></i></a>
      <a href="https://github.com/OliverVermeulen" class="social-link" target="_blank"><i class="fab fa-github icon" alt="GitHub"></i></a>
      <a href="https://www.linkedin.com/in/oliver-vermeulen-311221222/" class="social-link" target="_blank"><i class="fab fa-linkedin-in icon" alt="Linkedin"></i></a>
    </div>
    <ul class="footer-grid">
      <li class="footer-grid-wrapper">Audio and Subtitles</li>
      <li class="footer-grid-wrapper">Audio Description</li>
      <li class="footer-grid-wrapper">Help Centre</li>
      <li class="footer-grid-wrapper">Gift Cards</li>

      <li class="footer-grid-wrapper">Media Centre</li>
      <li class="footer-grid-wrapper">Investor Relations</li>
      <li class="footer-grid-wrapper">Jobs</li>
      <li class="footer-grid-wrapper">Terms of Use</li>

      <li class="footer-grid-wrapper">Privacy</li>
      <li class="footer-grid-wrapper">Legal Notices</li>
      <li class="footer-grid-wrapper">Cookie Preferences</li>
      <li class="footer-grid-wrapper">Corporate Information</li>
    </ul>
    <p>© 2022-2022 Viswinkel, Ltd.</p>
  </footer>
  `,
  mounted() {},
};

window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(component);
  app.mount("#app");
});
