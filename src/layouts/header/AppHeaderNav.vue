<template>
  <nav>
    <ul class="header-nav">
      <template v-for="item in userLoggedIn">
        <li
          v-if="item.show"
          class="header-nav_li cursor-pointer"
          @click="navTo(item.name)"
          :key="item.name"
          :class="{ 'text-gray-900': item.name === 'home' }"
        >
          {{ item.text }}
        </li>
      </template>
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
        { name: "home", route: "/", text: "Home", show: this.user },
        { name: "login", route: "/login", text: "Sign in", show: true },
        { name: "logout", route: "/", text: "Logout", show: false },
        { name: "signup", route: "/signup", text: "Sign Up", show: true },
      ] as NavItem[],
      showItem: true,
    };
  },
  computed: {
    userLoggedIn(): NavItem[] {
      const isLogged: boolean = this.$store.getters.userLoggedIn;
      return [
        { name: "home", route: "/", text: "Home", show: true },
        { name: "login", route: "/login", text: "Sign in", show: !isLogged },
        { name: "logout", route: "/", text: "Logout", show: isLogged },
        { name: "signup", route: "/signup", text: "Sign Up", show: !isLogged },
        { name: "user", route: "/user", text: "User", show: isLogged },
      ];
    },
  },
  methods: {
    navTo(name) {
      if (name == "logout") this.$store.dispatch("logout");
      else this.$router.push({ name });
    },
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
