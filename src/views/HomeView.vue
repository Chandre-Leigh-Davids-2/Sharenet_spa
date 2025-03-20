<template>
  <div class="parallax">
    <h1>Step into the quiet, sacred space of Konoha Spa</h1>
    <p class="subheading">Welcome to Konoha Spa, a sanctuary where traditional Japanese onsen rituals meet modern
      relaxation techniques. Inspired by the ancient hot springs of Japan, our spa is designed to offer a tranquil
      retreat where you can rejuvenate your body, calm your mind, and restore your spirit.
    </p>
  </div>

  <div class="main">
    <div class="row">
      <div class="col-md-7">
        <div class="img">
          <img src="../assets/images/engin-akyurt-SMwCQZWayj0-unsplash.jpg" alt="">
        </div>
      </div>
      <div class="col-md-5">
        <h2>Our Story</h2>
        <p>Konoha Spa was born from a passion for Japanese wellness traditions and a desire to share the healing power
          of onsen therapy with the modern world. Inspired by the tranquil mountain retreats of Japan, where natural hot
          springs have been used for centuries to soothe the body and promote inner peace, we sought to create a
          peaceful haven that mirrors this experience.

          Our name, Konoha, meaning "tree leaves" in Japanese, reflects our deep connection to nature and its
          restorative energy. Just as leaves sway gently with the wind, adapting and thriving in harmony with the
          seasons, we believe in fostering an environment that encourages balance, renewal, and gentle transformation.

          Our spa combines traditional Japanese practices with contemporary spa treatments, offering guests an
          experience that nourishes both body and soul. From the moment you step through our doors, you are invited to
          slow down, breathe deeply, and allow the essence of Japan’s natural healing to wash over you.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mt-5">
        <img src="../assets/images/wren-chai-_j54YXzW1_c-unsplash.jpg" alt="">
      </div>
      <div class="col-md-4 mt-5">
        <div class="img">
          <img src="../assets/images/close-up-beautiful-african-woman-enjoying-massage-spa-salon.jpg" alt="">
        </div>
      </div>
      <div class="col-md-4 mt-5">
        <h2>Our mission</h2>
        <p>At Konoha Spa, we believe in the art of slow living—taking time to unwind, reset, and nurture both body and
          soul. Our mission is to provide an authentic Japanese-inspired wellness retreat, where each guest experiences
          deep relaxation through onsen-style baths, aromatherapy, massage therapies, and nature-infused treatments. We
          are dedicated to offering a space that harmonizes tradition and tranquility, ensuring that every visit leaves
          you feeling renewed, refreshed, and deeply connected to your inner peace.</p>
      </div>
    </div>
  </div>

  <div class="mt-5">
    <SpotTable v-if="spots.length" :spots="spots" />
    <p v-else>Loading data...</p>
  </div>
  <div class="parallax2">
    <h1>Rejuvenate Your Mind, Body & Soul</h1>
    <p class="subheading">"Step into the quiet, sacred space of Konoha Spa — A sanctuary inspired by the timeless
      beauty of Japan. Let the dark serenity of our environment guide you toward deep relaxation and rejuvenation."
    </p>
  </div>

</template>
<script>
import { mapActions } from "vuex";
import SpotTable from "@/components/SpotTable.vue"; // Import the child component

export default {
  components: { SpotTable },
  data() {
    return {
      spots: []
    };
  },
  methods: {
    ...mapActions(["getData"]),

    async fetchData() {
      await this.getData(); // Fetch data from Vuex
      this.spots = this.$store.state.spots || []; // Get data from Vuex state and pass as prop
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Metrophobic&display=swap');
.parallax {
  background-image: url("../assets/images/nichika-sakurai-pm3uMbabqQc-unsplash.jpg");
  min-height: 800px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15%;
}

.parallax2 {
  background-image: url("../assets/images/beautiful-arrangement-with-spa-stones-candles.jpg");
  min-height: 800px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15%;
}
h1 {
  font-size: 5vw;
}
.subheading {
  font-size: 1.5vw;
}
h1,
.subheading {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
  text-shadow: 1px 3px 2px rgb(0, 0, 0);
}
h2{
  font-weight: bold;
}
h2,p{
  font-family: "Metrophobic", sans-serif;
}
.main {
  padding: 8%;
  background-color: white;
}

.img {
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

img {
  width: 100%;
  /* Makes the image take the full width of its parent */
  height: 100%;
  /* Ensures the image stretches to fit the parent height */
  object-fit: cover;
  /* Applies the same border radius to the image */
}

@media screen and (max-width:900px) {
  .img {
    width: 100%;
    height: 30vh;
    overflow: hidden;
  }
}

@media screen and (max-width:500px) {
  .img {
    width: 100%;
    height: 40vh;
    overflow: hidden;
  }
}

.table {
  background-color: rgb(44, 44, 44);
  width: 100%;
  padding: 5px;
}

.row {
  margin: 0;
  padding: 0;
}
</style>