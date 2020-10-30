<template>
  <div id="app">
    <v-app>
      <v-main fluid fill-height>
        <v-container>

     
          <div class="d-flex align-center">
            <Logo />
            <Navigation />
            <LanguageChange />
            
     
          </div>
  

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
         </v-container>
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
  components: { Logo, Navigation, LanguageChange  },
  created() {},
  data: () => ({
      
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped>
#navBg {
  background: rgb(46, 46, 143);
  /* background: url('https://i.ibb.co/XyS0BMc/cover.jpg') no-repeat center center fixed; background-size: cover; */
}
</style>
