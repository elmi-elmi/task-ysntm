<template>
  <header class="header">
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
  @apply container max-w-5xl mx-auto flex justify-between py-2  text-[1rem];
}
</style>
