<template>
  <div class="pa-10">
    <v-row >
        <v-col cols="3" style="position: relative;">

         <h1 class="heading1 slide-in" >{{ $t("home.title") }}</h1>
          <!-- <v-img :src="require(`@/assets/banner.jpg`)" contain style="width: 70%;" /> -->
      <!-- <div style="position: absolute;
  top: 42px;
  left: 40px;">
        <h1 class="heading1 slide-in" >{{ $t("home.title") }}</h1>
      </div> -->

   </v-col>
         <v-col style="max-width:400px" class="text-center">
        <v-img
          style="display: inline-block;"
          :src="require(`@/assets/1.png`)"
          contain
          height="200"
        />
        <h4>{{ $t("home.award") }}</h4>
        <p>{{ $t("home.awardText") }}</p>
       <v-icon small color="red darken-2" style="padding-bottom: 2px">mdi-play-box</v-icon> <a class="text-decoration-none" href="https://www.youtube.com/watch?v=MwDtE_6RNB4" target="_blank" >Evatherm on Youtube</a>
      </v-col>
  
    </v-row>

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
.heading1 {
  /* color: white */
}
</style>
