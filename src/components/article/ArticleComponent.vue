<template>
  <section class="container max-w-5xl mx-auto">
    <div v-if="!article">loading...</div>
    <div v-else>
      <ArticleBanner />
      <p>
        {{ article.body }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleBanner from "@/components/article/ArticleBanner.vue";

export default defineComponent({
  name: "ArticleComponent",
  components: { ArticleBanner },
  computed: {
    article() {
      return this.$store.getters.getArticleWithSlug(this.$route.params.slug);
    },
  },
});
</script>

<style scoped></style>
