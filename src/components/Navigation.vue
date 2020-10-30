<template>
  <div>
    <div
      class="d-flex mt-2"
      style="height: 35px"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <div
        class="px-4 hover-pointer d-flex align-center navItem"
        :class="{
          'border-right': i < navItems.length - 1,
          'active-nav': navLink.link === $route.name,
        }"
        v-for="(navLink, i) in navItems"
        :key="navLink.text"
        @click="handleNav(navLink)"
      >
        <div style="font-size: 0.9rem" v-text="$t(navLink.text)"></div>
      </div>
    </div>

    <!-- MOBILE VIEW -->
    <div v-else>
      <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" />

      <v-navigation-drawer
        right
        :width="$vuetify.breakpoint.mdAndUp ? '50%' : '70%'"
        v-model="drawer"
        app
        clipped
      >
        <div class="d-flex justify-end">
          <v-icon large class="" @click="drawer = false">close</v-icon>
        </div>

        <v-list dense class="mt-0 pt-0">
          <template v-for="item in navItems">
            <v-list-item :key="item.text" :to="item.link" link >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title style="font-size: 1.2rem" v-text="$t(item.text)"> </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
         <LanguageChange/>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import LanguageChange from "@/components/LanguageChange.vue";
export default {
  props: [""],
  components: {LanguageChange},
  data: () => ({
    drawer: false,
    navItems: [
      { text: "nav.home", link: "home", icon: "home" },
      { text: "nav.about", link: "about", icon: "groups" },
      { text: "nav.tech", link: "technologies", icon: "engineering" },
      {
        text: "nav.applications",
        link: "applications",
        icon: "corporate_fare",
      },
      { text: "nav.download", link: "downloads", icon: "cloud_download" },
      { text: "nav.jobs", link: "jobs", icon: "business_center" },
      { text: "nav.contact", link: "contact", icon: "mail_outline" },
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
.active-nav {
  font-weight: 600;
}
.navItem:hover {
  color: rgb(55, 85, 185);
}


</style>
