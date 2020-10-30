<template>
  <div class="ml-10 mr-2" style="max-width: 100px">
    <!--  <div class="mx-2">
      <v-img
      :class="{'selected':$i18n.locale === 'de' }"
        class="hover-pointer"
        @click="$i18n.locale = 'de'"
        :src="require('../assets/flags/de.png')"
        contain
        width="30"
      />
    </div>

     <div class="mx-2">
      <v-img
       :class="{'selected':$i18n.locale === 'en' }"
        class="hover-pointer"
        @click="$i18n.locale = 'en'"
        :src="require('../assets/flags/en.png')"
        contain
        width="30"
      />
    </div> -->
    <!--  -->

    <v-select
    background-color="transparent"
      hide-details
      solo
      flat
      v-model="$i18n.locale"
      :items="languages"
    >
      <template v-slot:item="data">
        <v-img
          style="display: inline-block"
          :src="require(`../assets/flags/${data.item}.png`)"
          contain
          height="20"
        />
      </template>

      <template v-slot:selection="data">
        <v-img
          :src="require(`../assets/flags/${data.item}.png`)"
          height="20"
          contain
          style="display: inline-block"
        />
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    languages: ["en", "de"],
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped>
/* .selected {
  opacity: 0.5;
} */
</style>
