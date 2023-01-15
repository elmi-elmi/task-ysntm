<script lang="ts">
import HomeBanner from "@/components/home/HomeBanner.vue";
import HomeArticle from "@/components/home/home-articles/HomeArticles.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: { HomeBanner, HomeArticle },
});
</script>

<template>
  <section>
    <HomeBanner />
    <HomeArticle />
  </section>
</template>
