<template>
  <ArticleComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleComponent from "@/components/article/ArticleComponent.vue";
export default defineComponent({
  name: "ArticleView",
  components: { ArticleComponent },
});
</script>

<style scoped></style>
