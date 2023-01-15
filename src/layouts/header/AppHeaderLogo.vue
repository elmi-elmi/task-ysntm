<template>
  <div class="header-logo" @click="$router.push({ name: 'home' })">conduit</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeaderLogo",
});
</script>

<style lang="scss" scoped>
.header-logo {
  @apply font-bold text-conduit cursor-pointer text-2xl;
}
</style>
