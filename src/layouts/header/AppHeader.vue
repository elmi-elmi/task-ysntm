<template>
  <header class="header container max-w-5xl mx-auto flex justify-between">
    <AppHeaderLogo />
    <AppHeaderNav />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeaderNav from "@/layouts/header/AppHeaderNav.vue";
import AppHeaderLogo from "@/layouts/header/AppHeaderLogo.vue";

export default defineComponent({
  components: { AppHeaderNav, AppHeaderLogo },
});
</script>

<style scoped>
.header {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
</style>
