<template>
  <nav>
    <ul class="header-nav">
      <li
        class="header-nav_li cursor-pointer"
        v-for="item in navItem"
        :key="item.name"
        :class="{ 'text-gray-900': item.name === 'home' }"
      >
        {{ item.text }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { NavItem } from "@/types";

export default defineComponent({
  data() {
    return {
      navItem: [
        { name: "home", route: "/", text: "Home" },
        { name: "signIn", route: "/signin", text: "Sign in" },
        { name: "signup", route: "/signup", text: "Sign Up" },
      ] as NavItem[],
    };
  },
});
</script>

<style lang="scss" scoped>
.header-nav {
  @apply flex space-x-3 text-gray-400;
  &__li {
    @apply hover:text-gray-800 text-2xl;
  }
}
</style>
