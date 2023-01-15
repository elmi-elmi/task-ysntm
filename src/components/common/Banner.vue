<template>
  <section class="banner text-white bg-conduit">
    <h1 class="banner__tittle">{{ title }}</h1>
    <h2 class="banner__pre-title">{{ description }}</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommonBanner",
  props: {
    title: {
      type: String,
      default: "No title",
    },
    description: {
      type: String,
      default: "No description",
    },
  },
});
</script>

<style lang="scss" scoped>
.banner {
  @apply p-4 mb-4 text-white;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
    inset 0 -8px 8px -8px rgb(0 0 0 / 30%);

  &__tittle {
    @apply text-center pb-2 text-[3.5rem] font-bold;
    text-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
  }
  &__pre-title {
    @apply text-center text-2xl mb-0 font-light;
  }
}
</style>
