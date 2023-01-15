<template>
  <div class="header-logo" @click="$router.push({ name: 'home' })">conduit</div>
</template>

<script>
export default {
  name: "AppHeaderLogo",
};
</script>

<style lang="scss" scoped>
.header-logo {
  @apply font-bold text-conduit cursor-pointer text-2xl;
}
</style>
