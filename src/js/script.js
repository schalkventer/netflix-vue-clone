class Item {
  constructor(id, itemName, genre, comingSoon, availDate, thumbNail, preview) {
    this.id = id;
    this.name = itemName;
    this.genre = genre;
    this.comingSoon = comingSoon;
    this.availDate = availDate;
    this.thumbnail = thumbNail;
    this.preview = preview;
  }
}

const { createApp } = window.Vue;

const component = {
  data() {
    return {
      itemList: [
        new Item(
          "S_mc_2001",
          "Shrek",
          "Comedy",
          false,
          "22-04-2001",
          "./src/images/shrek.jpg",
          "https://www.youtube.com/watch?v=CwXOrWvPBPk"
        ),

        new Item(
          "TO_sc_2005",
          "The Office",
          "Comedy",
          false,
          "24-03-2005",
          "./src/images/the-office.jpg",
          "https://www.youtube.com/watch?v=2iKZmRR9AR4"
        ),

        new Item(
          "HR_mc_2007",
          "Hot Rod",
          "Comedy",
          false,
          "03-08-2007",
          "./src/images/hot-rod.jpg",
          "https://www.youtube.com/watch?v=yByhd7FAOug"
        ),

        new Item(
          "FIFF_sc_2015",
          "F is for Family",
          "Comedy",
          false,
          "18-12-2015",
          "./src/images/f-is-for-family.jpg",
          "https://www.youtube.com/watch?v=f2AmK5QVtbg"
        ),

        new Item(
          "KFH_mc_2004",
          "Kung Fu Hustle",
          "Comedy",
          false,
          "23-12-2004",
          "./src/images/kung-fu-hustle.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),

        new Item(
          "PB_sa_2013",
          "Peaky Blinders",
          "Action",
          false,
          "23-12-2013",
          "./src/images/peaky-blinders.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),

        new Item(
          "AOTD_ma_2021",
          "Army of the Dead",
          "Action",
          false,
          "23-12-2013",
          "./src/images/army-of-the-dead.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),
        new Item(
          "PB_sa_2013",
          "Peaky Blinders",
          "Action",
          false,
          "23-12-2013",
          "./src/images/peaky-blinders.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),
        new Item(
          "PB_sa_2013",
          "Peaky Blinders",
          "Action",
          false,
          "23-12-2013",
          "./src/images/peaky-blinders.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),
        new Item(
          "PB_sa_2013",
          "Peaky Blinders",
          "Action",
          false,
          "23-12-2013",
          "./src/images/peaky-blinders.jpg",
          "https://www.youtube.com/watch?v=47nS6Wo4yaw"
        ),
        
      ],
      visibleSlide: 0,
      userArray: [],
      username: "",
      comingSoon: [],
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
    <div id="content-grid">
      <div class="container-heading">Coming Soon</div>
      <div class="container">
        <div class="box" v-for="(item, index) in comingSoonList" :key="item.id">
          <img class="bg" v-bind:src="item.thumbnail" />
        </div>
      </div>

      <div class="container-heading">Available</div>
      <div class="container">
        <div class="box" v-for="(item, index) in availableList" :key="item.id">
          <img class="bg" v-bind:src="item.thumbnail" />
        </div>
      </div>

      <div class="container-heading">Action</div>
      <div class="container">
        <div class="box" v-for="(item, index) in actionList" :key="item.id">
          <img class="bg" v-bind:src="item.thumbnail" />
        </div>
      </div> 

      <div class="container-heading">Comedy</div>
      <div class="container">
        <div class="box" v-for="(item, index) in comedyList" :key="item.id">
          <img class="bg" v-bind:src="item.thumbnail" />
        </div>
      </div> 
    </div>

    </div>
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
  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
    this.username = this.userArray[0]._username;
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(component);
  app.mount("#app");
});
