<template>
  <LoginForm />
  <div class="p-4 text-gray-500">
    <p>hint: (defined users -- https://reqres.in/api )</p>
    <p>email: eve.holt@reqres.in</p>
    <p>password: cityslicka</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/login/LoginForm.vue";
export default defineComponent({
  name: "LoginView",
  components: { LoginForm },
});
</script>

<style scoped></style>
