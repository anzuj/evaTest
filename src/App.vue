<template>

  <div id="app">
    <v-app>
      <v-main fluid fill-height>
         
        <div class="white">
          <div class="d-flex">
            <Logo />
            <div style="width:80px;">
              <v-select
                :menu-props="{ bottom: true, offsetY: true }"
                solo
                flat
                background-color="transparent"
                append-icon="mdi-earth"
                v-model="$i18n.locale"
                :items="languages"
              ></v-select>
            </div>
          </div>
        </div>

        <!-- nav tabs -->
        <nav>
          <v-row id="navBg">
            <v-tabs
              v-model="tab"
              background-color="primary"
              dark
              centered
              icons-and-text
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab
                v-for="navLink in navItems"
                :key="navLink.text"
                @click="handleNav(navLink)"
              >
                <div v-text="$t(navLink.text)"></div>
                <v-icon>{{ navLink.icon }}</v-icon>
              </v-tab>
            </v-tabs>
          </v-row>
        </nav>
  
        <!-- /nav tabs -->

        <!--        <v-tabs-items v-model="tab">
          <v-tab-item v-for="navLink in navItems" :key="navLink.text">
            <v-card flat>
              <v-card-text>
                <span v-text="$t(navLink.text)">{{ navLink.text }}</span>
                content</v-card-text
              >
            </v-card>
          </v-tab-item>
        </v-tabs-items> -->

        <v-slide-x-reverse-transition :hide-on-leave="true">
          <router-view class="mt-5"> </router-view>
        </v-slide-x-reverse-transition>
         <ParticlesJS>
             </ParticlesJS>
      </v-main>
    </v-app>

  </div>
   
</template>

<script>
import Logo from "@/components/Logo.vue";
import ParticlesJS from '@/components/Particles.vue'
export default {
  props: [""],
  components: { Logo, ParticlesJS },
  created(){

  },
  data: () => ({
    tab: 0,
    languages: ["en", "de"],
    navItems: [
      { text: "nav.home", link: "home", icon: "home" },
      { text: "nav.about", link: "about", icon: "groups" },
      { text: "nav.tech", link: "", icon: "engineering" },
      { text: "nav.applications", link: "", icon: "corporate_fare" },
      { text: "nav.download", link: "", icon: "cloud_download" },
      { text: "nav.jobs", link: "", icon: "business_center" },
      { text: "nav.contact", link: "", icon: "mail_outline" },
    ],
  }),
  methods: {
    handleNav(nav) {
      if (nav.link === this.$route.name) {
        return;
      }

      if (nav.link) {
        this.$router.push({ name: nav.link });
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
#navBg{
    background: rgb(46, 46, 143);
    /* background: url('https://i.ibb.co/XyS0BMc/cover.jpg') no-repeat center center fixed; background-size: cover; */
}
</style>
