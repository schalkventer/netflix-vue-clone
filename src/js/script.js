import { ItemArray } from "../classes/ItemArray.js";

const { createApp } = window.Vue;

const component = {
  data() {
    return {
      itemList: ItemArray,
    };
  },

  // filter function
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

  // html template
  template: /* html */ `
    <div>
    <header id="myHeader">
    <a href="#" class="netflix-logo"><img src="/src/images/netflix.png" alt="Netflix logo"/></a>
    <ul class="navigation-list">
      <li>Home</li>
      <li><a href="./my-list.html">My List</a></li>
    </ul>
    <div class="search">
      <input type="search" placeholder="Titles, people, genres" id="search"/>
      <i class="fa fa-search"></i>
    </div>
  </header>

  <main id="myMain">
    <section class="banner" v-for="item in comingSoonList.slice(0, 1)">
      <video class="bg" autoplay muted loop>
      <source :src="item.preview" type="video/mp4">
      </video>
      <div class="content">
        <img :src="item.poster" class="movieTitle" :alt="item.name" />
        <p>{{ item.description }}</p>
        <div class="buttons">
          <button class="button play"><a :href="item.trailer" target="_blank"><i class="fa fa-play"></i> Play</a></button>
          <button class="button info" id="myBtn"><i class="fa fa-plus"></i> More Info</button>
          
          <!-- Modal -->
          <div id="myModal" class="modal">
            <div class="modal-content">
              <div class="modal-header">
                <img :src="item.poster" />
                <span class="close">x</span>
              </div>
              <div class="modal-body">
              <h3>About: {{ item.name }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="modal-footer">
                <p>Release: {{ item.releaseDate }}</p>
                <p>Genre: {{ item.genre }}</p>
                <p>Rating: {{ item.rating }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="content-grid">
      <div class="container-heading">Action</div>
      <div class="container">
        <div class="box" v-for="item in actionList.slice(0, 6)" :id="item.id" :class="item.name" :alt="item.name">
          <img class="bg" :src="item.poster" />
        </div>
      </div> 

      <div class="container-heading">Comedy</div>
      <div class="container">
        <div class="box" v-for="item in comedyList.slice(0, 6)" :id="item.id" :class="item.name" :alt="item.name">
          <img class="bg" :src="item.poster" />
        </div>
      </div>

      <div class="container-heading">Romance</div>
      <div class="container">
        <div class="box" v-for="item in romanceList.slice(0, 6)" :id="item.id" :class="item.name" :alt="item.name">
          <img class="bg" :src="item.poster" />
        </div>
      </div>

      <div class="container-heading">Horror</div>
      <div class="container">
        <div class="box" v-for="item in horrorList.slice(0, 6)" :id="item.id" :class="item.name" :alt="item.name">
          <img class="bg" :src="item.poster" />
        </div>
      </div>
    </section>
  </main>

  <footer id="myFooter">
    <div class="social-links">
      <a href="https://www.instagram.com/oliver.vermeulen/" class="social-link" target="_blank"><i class="fab fa-instagram icon" alt="Instagram"></i></a>
      <a href="https://github.com/OliverVermeulen" class="social-link" target="_blank"><i class="fab fa-github icon" alt="GitHub"></i></a>
      <a href="https://www.linkedin.com/in/oliver-vermeulen-311221222/" class="social-link" target="_blank"><i class="fab fa-linkedin-in icon" alt="Linkedin"></i></a>
    </div>
    <ul class="footer-grid">
      <li class="footer-grid-item">Audio and Subtitles</li>
      <li class="footer-grid-item">Audio Description</li>
      <li class="footer-grid-item">Help Centre</li>
      <li class="footer-grid-item">Gift Cards</li>

      <li class="footer-grid-item">Media Centre</li>
      <li class="footer-grid-item">Investor Relations</li>
      <li class="footer-grid-item">Jobs</li>
      <li class="footer-grid-item">Terms of Use</li>

      <li class="footer-grid-item">Privacy</li>
      <li class="footer-grid-item">Legal Notices</li>
      <li class="footer-grid-item">Cookie Preferences</li>
      <li class="footer-grid-item">Corporate Information</li>
    </ul>
    <p>© 2022-2022 Viswinkel, Ltd.</p>
  </footer>
</div>
  `,
  mounted() {
    console.log(ItemArray);
  },
};

// mounting app
window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(component);
  app.mount("#app");
  // modal
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

