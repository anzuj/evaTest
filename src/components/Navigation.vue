<template>
    <!-- nav tabs -->
    <nav>
      <v-row id="navBg">
        <v-tabs hide-slider v-model="tab" color="primary" background-color="transparent" centered active-class="primary white--text">
          <v-tab

            :class="{ 'border-right': i < navItems.length - 1 }"
            v-for="(navLink, i) in navItems"
            :key="navLink.text"
            @click="handleNav(navLink)"
          >
            <div v-text="$t(navLink.text)"></div>
            <!-- v-if="$route.name === navLink.link" -->
            <!-- <v-icon >{{ navLink.icon }}</v-icon> -->
          </v-tab>

          <!-- <v-tabs-slider></v-tabs-slider> -->
        </v-tabs>
      </v-row>
    </nav>
    <!-- /nav tabs -->
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    tab: 0,

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

<style>
.border-right {
  border-right: 1px solid lightgrey;
}
</style>
