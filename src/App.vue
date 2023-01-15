<script lang="ts">
import AppHeader from "@/layouts/header/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { AppFooter, AppHeader },
  created() {
    this.$store.dispatch("getArticles");
  },
});
</script>

<template>
  <main class="pb-24">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </main>
</template>
