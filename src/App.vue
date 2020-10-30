<template>
  <div id="app">
    <v-app>
      <v-main fluid fill-height>
        <nav class="d-flex">
          <!-- v-if="$vuetify.breakpoint.mdAndUp" -->
          <Logo />
          <v-spacer></v-spacer>
          <Navigation />
          <LanguageChange v-if="$vuetify.breakpoint.mdAndUp" />
        </nav>

        <v-container>
          <router-view class=""> </router-view>
        </v-container>

        <v-footer
        padless
          :color="$vuetify.breakpoint.xs ? 'primary darken-1' : 'transparent'"
          :dark="$vuetify.breakpoint.xs"
          class="mt-14 pt-5"
          v-show="$route.name === 'home'"
        >
          <!-- <div style="height: 5px; background-color: black; width: 100%"></div> -->
          <!-- <div
            style="height: 3px; background-color: black; margin-top: 2px; width: 100%"
          ></div> -->
          <v-row justify="center no-gutters">
            <v-col class="text-center ma-0">
              <h3 class="mb-1">{{ $t("home.head") }}</h3>EVATHERM Ltd. | Hintermättlistr. 3 | Gewerbepark | CH-5506 Mägenwil
              <div v-for="contact in contactInfo" :key="contact.text">
                <v-icon small class="mr-1">{{ contact.icon }}</v-icon>
                <span>{{ contact.text }}</span>
              </div>


               <div class="mt-10 text-caption"  :class="$vuetify.breakpoint.xs ? 'primary' : 'grey'">
            <a class="text-decoration-none" :class="$vuetify.breakpoint.xs ? 'blue--text text--lighten-2' : 'black--text'" target="_blank" href="https://anzudev.com">© Anzelika Häberli  -  {{ new Date().getFullYear() }}</a>
          </div>
            </v-col>
          </v-row>

         
        </v-footer>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
import LanguageChange from "@/components/LanguageChange.vue";
export default {
  props: [""],
  components: { Logo, Navigation, LanguageChange },
  created() {},
  data: () => ({
    contactInfo: [
      { icon: "phone", text: "Tel +41 62 889 79 00" },
      { icon: "mdi-fax", text: "Fax +41 62 889 79 01" },
      { icon: "mail", text: "info@evatherm.com" },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped>
#blueFooter {
  background: rgb(22, 74, 128);
  background: linear-gradient(
    135deg,
    rgba(22, 74, 128, 1) 35%,
    rgba(12, 136, 204, 1) 100%
  );
}
</style>
