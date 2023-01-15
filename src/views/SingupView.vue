<template>
  <section
    class="container mx-auto max-w-xl border-2 border-gray-400 rounded-2xl p-4"
  >
    <div>
      <h1 class="mb-6 text-conduit">Sign Up</h1>

      <form @submit.prevent="register" class="flex flex-col items-start">
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
        <label>Confirm Password</label>
        <input
          v-model="passwordConfirm"
          type="password"
          placeholder="password"
          class="p-1"
        />
        <button
          type="submit"
          name="button"
          class="border-2 rounded-xl px-4 py-1 mt-10 border-gray-400 hover:bg-conduit"
        >
          Register
        </button>
        <p class="text-red-400">{{ error }}</p>
      </form>
      <span>Already have an account? </span>
      <router-link :to="{ name: 'login' }" class="text-blue-400">
        login here!
      </router-link>
    </div>
  </section>
  <div class="p-4 text-gray-500">
    <p>hint: (defined users -- https://reqres.in/api )</p>
    <p>email: eve.holt@reqres.in</p>
    <p>password: pistol</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupView",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      error: "",
    };
  },
  methods: {
    register() {
      if (this.password !== this.passwordConfirm) {
        this.error = "confirm your password correctly";
        return;
      }
      this.$store
        .dispatch("register", { email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.error = err.response.data.error;
        });
    },
  },
});
</script>

<style scoped></style>
