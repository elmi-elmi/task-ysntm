<template>
  <div class="card space-y-2">
    <div class="card__overline">
      <div class="card-testimonial flex space-x-2">
        <img
          alt="Vue logo"
          class="avatar"
          src="@/assets/logo.svg"
          width="32"
          height="32"
        />
        <div class="card-testimonial__info">
          <div class="card-testimonial-info__name text-conduit">shahrokh</div>
          <div class="card-testimonial-info__date text-gray-600">
            December9, 22
          </div>
        </div>
      </div>
    </div>
    <div class="card__title">
      <p class="card-title__main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
        praesentium!
      </p>
      <p class="card-title__pre">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="card__actions text-gray-300 flex justify-between">
      <div>read more...</div>
      <div class="flex space-x-2">
        <span class="rounded-2xl px-1 border-2 border-gray-200">voluptate</span>
        <span class="rounded-2xl px-1 border-2 border-gray-200">hic</span>
        <span class="rounded-2xl px-1 border-2 border-gray-200">rerum</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCard",
});
</script>

<style lang="scss" scoped>
.card {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
}

.card-title {
  &__main {
    font-weight: 600 !important;
    font-size: 1.5rem !important;
    margin-bottom: 3px;
  }
  &__pre {
    font-weight: 300;
    color: #999;
    margin-bottom: 15px;
    font-size: 1rem;
    line-height: 1.3rem;
  }
}
</style>
