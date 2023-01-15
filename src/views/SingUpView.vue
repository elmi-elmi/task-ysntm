<template>
  <RegisterForm />
  <div class="p-4 text-gray-500">
    <p>hint: (defined users -- https://reqres.in/api )</p>
    <p>email: eve.holt@reqres.in</p>
    <p>password: pistol</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "@/components/register/RegisterForm.vue";
export default defineComponent({
  name: "SignupView",
  components: { RegisterForm },
});
</script>

<style scoped></style>
