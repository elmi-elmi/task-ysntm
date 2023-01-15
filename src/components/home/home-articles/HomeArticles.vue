<template>
  <section class="articles container max-w-5xl mx-auto">
    <router-link to="/" class="articles__tab w-fit">Global Feed</router-link>
    <div v-if="!articles?.length">loading...</div>
    <template v-else>
      <HomeCard
        v-for="(article, i) in articles"
        @click="
          $router.push({ name: 'article', params: { slug: article.slug } })
        "
        :title="article.title"
        :description="article.description"
        :tag-list="article.tagList"
        :author="article.author"
        :key="i"
      />
    </template>
    <div class="flex" v-if="articles?.length">
      <button
        v-for="i in 20"
        :key="i"
        class="p-2 border-2 hover:bg-conduit border-conduit"
        @click="paginate(i)"
      >
        {{ i }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeCard from "@/components/home/home-articles/HomeCard.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "SectionHomeArticle",
  components: { HomeCard },

  computed: {
    ...mapState(["articles"]),
  },

  methods: {
    paginate(num) {
      const query = { limit: 10, offset: Number(num * 10) };
      this.$store.dispatch("getArticles", query);
    },
  },
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
