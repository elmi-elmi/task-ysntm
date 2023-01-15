<template>
  <section
    class="container mx-auto max-w-xl border-2 border-gray-400 rounded-2xl p-4"
  >
    <div>
      <h1 class="mb-6 text-conduit">Sign in</h1>

      <form @submit.prevent="login" class="flex flex-col items-start">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="example@email.com"
          class="p-1 mb-2"
        />
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="password"
          class="p-1"
        />
        <button
          type="submit"
          name="button"
          class="border-2 rounded-xl px-4 py-1 mt-10 border-gray-400 hover:bg-conduit"
        >
          Login
        </button>
        <p class="text-red-400">{{ error }}</p>
      </form>
      <span>Don't have an account? </span>
      <router-link :to="{ name: 'signup' }" class="text-blue-400">
        Register here!
      </router-link>
    </div>
  </section>
  <div class="p-4 text-gray-500">
    <p>hint: (defined users -- https://reqres.in/api )</p>
    <p>email: eve.holt@reqres.in</p>
    <p>password: cityslicka</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then((res) => {
          console.log("login:", res);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.error = err.response.data;
        });
    },
  },
});
</script>

<style scoped></style>
