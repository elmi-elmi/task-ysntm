<template>
  <h1>Article View {{ $route.params.slug }}</h1>
  {{ article.body }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticleView",
  computed: {
    article() {
      return this.$store.getters.getArticleWithSlug(this.$route.params.slug);
    },
  },
});
</script>

<style scoped></style>
