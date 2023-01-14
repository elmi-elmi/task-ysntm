<template>
  <section class="banner bg-conduit text-white">
    <h1 class="banner__tittle">conduit</h1>
    <h2 class="banner__pre-title">A place to share your knowledge.</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeBanner",
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
    @apply text-center text-[1.5rem] mb-0 font-light;
  }
}
</style>
