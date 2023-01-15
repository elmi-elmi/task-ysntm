<template>
  <section class="articles container max-w-5xl mx-auto">
    <router-link to="/" class="articles__tab w-fit">Global Feed</router-link>
    <HomeCard
      v-for="(article, i) in articles"
      @click="$router.push({ name: 'article', params: { slug: article.slug } })"
      :title="article.title"
      :description="article.description"
      :tag-list="article.tagList"
      :author="article.author"
      :key="i"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeCard from "@/components/home/home-article/HomeCard.vue";
export default defineComponent({
  name: "SectionHomeArticle",
  components: { HomeCard },

  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
.articles {
  &__tab {
    @apply text-conduit p-4;
    display: block;
    border-bottom: 2px solid #5cb85c !important;
  }
}
</style>
