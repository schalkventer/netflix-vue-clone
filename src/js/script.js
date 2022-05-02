class Movie {
  constructor(id, movieName, genre, comingSoon, availDate, thumbNail, preview) {
    this.id = id;
    this.name = movieName;
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
      movieList: [
        new Movie(
          "pi8HsKXN5G",
          "Everest",
          "Adventure",
          false,
          "18-09-2015",
          "/src/images/Everest.jpg",
          "https://www.youtube.com/watch?v=5ZQVpPiOji0"
        ),

        new Movie(
          "zhfzHGhFjK",
          "The Fast and The Furious",
          "Action",
          false,
          "22-06-2001",
          "/src/images/fast-and-furious-1.jpg",
          "https://www.youtube.com/watch?v=GoSUdZJg3pw"
        ),

        new Movie(
          "TymNNADk_X",
          "2 Fast 2 Furious",
          "Action",
          false,
          "06-06-2003",
          "/src/images/fast-and-furious-2.jpg",
          "https://www.youtube.com/watch?v=ZZGkV_xWGw4"
        ),

        new Movie(
          "N7xyWhg0i",
          "Mulan",
          "Action",
          false,
          "09-03-2020",
          "/src/images/mulan-poster.jpg",
          "https://www.youtube.com/watch?v=KK8FHdFluOQ"
        ),

        new Movie(
          "vdPZEOGsEj",
          "Fast 5",
          "Action",
          false,
          "29-04-2011",
          "/src/images/fast-and-furious-5.jpg",
          "https://www.youtube.com/watch?v=OqjeOYeG5_A"
        ),

        new Movie(
          "YS8INBNOTe",
          "Fast and Furious 6",
          "Action",
          false,
          "06-05-2013",
          "/src/images/fast-and-furious-6.jpg",
          "https://www.youtube.com/watch?v=C_puVuHoR6o"
        ),

        new Movie(
          "w6_nW_NAA2",
          "The Fast and the Furious: Tokyo Drift",
          "Action",
          false,
          "16-06-2006",
          "/src/images/fast-and-furious-3.jpg",
          "https://www.youtube.com/watch?v=p8HQ2JLlc4E"
        ),

        new Movie(
          "b8if75wW6O",
          "Furious 7",
          "Action",
          false,
          "03-04-2015",
          "/src/images/fast-and-furious-7.jpg",
          "https://www.youtube.com/watch?v=C_puVuHoR6o"
        ),

        new Movie(
          "_aGB09UvNV",
          "The Fate of the Furious",
          "Action",
          false,
          "14-04-2017",
          "/src/images/fast-and-furious-8.jpg",
          "https://www.youtube.com/watch?v=uisBaTkQAEs"
        ),

        new Movie(
          "f_A33vTJu8",
          "Fast & Furious Presents: Hobbs & Shaw",
          "Action",
          false,
          "02-08-2019",
          "/src/images/fast-and-furious-hobbs.jpg",
          " https://www.youtube.com/watch?v=HZ7PAyCDwEg"
        ),

        new Movie(
          "9h7vV2eVXG",
          "F9",
          "Action",
          false,
          "25-06-2021",
          "/src/images/fast-and-furious-9.jpg",
          "https://www.youtube.com/watch?v=fEE4RO-_jug"
        ),

        new Movie(
          "Wfx-U5Gst3",
          "Black Panther",
          "Action",
          false,
          "16-02-2018",
          "/src/images/black-panther.jpg",
          "https://www.youtube.com/watch?v=xjDjIWPwcPU"
        ),

        new Movie(
          "kMK4m9zQ9B",
          "Black Adam",
          "Action",
          true,
          "21-10-2022",
          "/src/images/black-adam.jpg",
          "https://www.youtube.com/watch?v=N73oTiIIJe0"
        ),

        new Movie(
          "9BFEgBKzKF",
          "Avatar 2",
          "Action/Adventure",
          true,
          "16-12-2022",
          "/src/images/avatar-2.jpg",
          "https://www.youtube.com/watch?v=MknKGdvuYKo"
        ),

        new Movie(
          "fVmpautPP3",
          "Top Gun: Maverick",
          "Action",
          true,
          "27-05-2022",
          "/src/images/top-gun-2.jpg",
          "https://www.youtube.com/watch?v=qSqVVswa420"
        ),

        new Movie(
          "m6WxCSplRZ",
          "Halloween Ends",
          "Horror",
          true,
          "14-10-2022",
          "/src/images/halloween-ends.jpg",
          "https://www.youtube.com/watch?v=4c8OLrmejkY&vl=en"
        ),

        new Movie(
          "BeeOpckwFw",
          "Free Guy",
          "comedy",
          false,
          "13-08-2021",
          "/src/images/free-guy.jpg",
          "https://www.youtube.com/watch?v=X2m-08cOAbc"
        ),

        new Movie(
          "L9N64HhJXz",
          "The Wolf of Wall Street",
          "Drama",
          false,
          "25-12-2013",
          "/src/images/wolf-of-wallstreet.jpg",
          "https://www.youtube.com/watch?v=iszwuX1AK6A"
        ),

        new Movie(
          "jZzvMU7hP7",
          "Grown Ups",
          "comedy",
          false,
          "25-06-2010",
          "/src/images/grown-ups.jpg",
          "https://www.youtube.com/watch?v=e01NVCveGkg"
        ),

        new Movie(
          "ba-j126W2c",
          "The Transporter",
          "Action",
          false,
          "02-10-2002",
          "/src/images/transporter.jpg",
          "https://www.youtube.com/watch?v=0poXFSvX0_4"
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
      return this.movieList.filter((movie) => {
        return movie.comingSoon === true;
      });
    },

    availableList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon === false;
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
        <div class="box" v-for="(movie, index) in comingSoonList" :key="movie.id">
          <img class="bg" v-bind:src="movie.thumbnail" />
        </div>
      </div>

      <div class="container-heading">Comedy</div>
      <div class="container">
        <div class="box" v-for="(movie, index) in availableList" :key="movie.id">
          <img class="bg" v-bind:src="movie.thumbnail" />
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
