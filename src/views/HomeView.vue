<script lang="ts">
// import TheWelcome from "../components/TheWelcome.vue";
import HomeBanner from "@/components/home/HomeBanner.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: { HomeBanner },
});
</script>

<template>
  <section>
    <!--    <TheWelcome />-->
    <HomeBanner />
  </section>
</template>
