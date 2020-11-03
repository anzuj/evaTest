<template>
  <div class="hover-pointer ma-3" @click="$router.push({ path: '/' })">
    <!-- v-if="$vuetify.breakpoint.mdAndUp" -->
    <template>
      <div id="logoWrapper" class="d-flex">
        <img src="../assets/logo.png" id="logoImg" />
        <div class="bubble bubble1"></div>
        <div class="bubble bubble2"></div>
        <div class="bubble bubble3"></div>
        <!-- <div class="dot bubble-pulse"></div>
        <div class="dot dot2 bubble-pulse"></div>
        <div class="dot dot3 bubble-pulse"></div> -->

        <div id="logotext">
          <div id="evatherm">EVATHERM</div>

          <div id="crystal">A company for crystallization<br />technology</div>
        </div>
      </div>
    </template>

    <!-- MOBILE VIEW -->
    <!-- <template v-else>
      <v-img :src="require('../assets/logo-image.png')" contain width="200" />
    </template> -->
  </div>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style>
#logoWrapper {
  width: 260px;
  height: 85px;
}

#logoImg {
  object-fit: contain;
  position: relative;
  height: 100%;
}

#logotext {
  font-family: "Nunito Sans", sans-serif;
  position: relative;
  left: -24%;
  top: 18%;
}

#evatherm {
  font-size: 40px;
  color: #005591;
  font-style: italic;
  font-weight: 600;
  transform: skewX(-10deg);
}

#crystal {
  font-size: 10px;
  line-height: 1;
  color: rgb(15, 56, 102);
  position: relative;
  top: -12px;
  left: 31%;
}

.bubble {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
    background-color: white;
  background: white;

  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgba(233, 250, 254, 1) 100%
  );
}

.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  top: 40px;
  left: 20px;
  border-radius: 50%;

    background-color: white;
  background: white;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgba(233, 250, 254, 1) 100%
  );
}

.dot2 {
  width: 4px;
  height: 4px;
  top: 20px;
  left: 10px;
}

.dot2 {
  width: 10px;
  opacity: 0.7;
  height: 10px;
  top: 70px;
  left: 70px;
}

@media only screen and (max-width: 1050px) {
  #logoWrapper {
    width: 195px;
    height: 63px;
  }

  #evatherm {
    font-size: 30px;
  }

  #crystal {
    font-size: 8px;
  }
}
</style>
