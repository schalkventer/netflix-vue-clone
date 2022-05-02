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
          "w6_nW_NAA2",
          "Shrek",
          "Comedy",
          false,
          "16-06-2006",
          "/src/images/shrek.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E"
        ),
        new Item(
          "w6_nW_NAA2",
          "The Office",
          "Comedy",
          false,
          "16-06-2006",
          "/src/images/the-office.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E"
        ),

        new Item(
          "w6_nW_NAA2",
          "Hot Rod",
          "Comedy",
          false,
          "16-06-2006",
          "/src/images/hot-rod.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E"
        ),

        new Item(
          "w6_nW_NAA2",
          "F is for Family",
          "Comedy",
          false,
          "16-06-2006",
          "/src/images/f-is-for-family.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E"
        ),

        new Item(
          "w6_nW_NAA2",
          "Kung Fu Hustle",
          "Comedy",
          false,
          "16-06-2006",
          "/src/images/kung-fu-hustle.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E"
        ),

        new Item(
          "kMK4m9zQ9B",
          "Black Adam",
          "Action",
          true,
          "21-10-2022",
          "/src/images/black-adam.jpg",
          "https://www.youtube.com/watch?v=N73oTiIIJe0"
        ),

        new Item(
          "9BFEgBKzKF",
          "Avatar 2",
          "Action/Adventure",
          true,
          "16-12-2022",
          "/src/images/avatar-2.jpg",
          "https://www.youtube.com/watch?v=MknKGdvuYKo"
        ),

        new Item(
          "fVmpautPP3",
          "Top Gun: Maverick",
          "Action",
          true,
          "27-05-2022",
          "/src/images/top-gun-2.jpg",
          "https://www.youtube.com/watch?v=qSqVVswa420"
        ),

        new Item(
          "m6WxCSplRZ",
          "Halloween Ends",
          "Horror",
          true,
          "14-10-2022",
          "/src/images/halloween-ends.jpg",
          "https://www.youtube.com/watch?v=4c8OLrmejkY&vl=en"
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
