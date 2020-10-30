<template>
  <v-container class="pa-10 slide-in" style="max-width: 800px">
    <h1 class="primary--text">{{ $t("nav.about") }}</h1>

    <v-row justify="center">
      <v-col>
        <p class="font-weight-bold">{{ $t("about.intro") }}</p>
        <img
        :class="{'mb-2': $vuetify.breakpoint.xs }"
          align="right"
          style="max-width: 300px"
          src="@/assets/about.png"
        />
        <p>{{ $t("about.1") }}</p>
        <p>{{ $t("about.2") }}</p>
        <p>{{ $t("about.3") }}</p>
        <p>{{ $t("about.4") }}</p>
      </v-col>

      <!--     <v-col :order="$vuetify.breakpoint.smAndDown ? 1 : 2" cols="12" md="4"  >  <v-img max-width="300" :src="require(`@/assets/about.png`)" contain /></v-col> -->
    </v-row>
  </v-container>
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
