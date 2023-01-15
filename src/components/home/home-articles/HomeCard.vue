<template>
  <div class="card space-y-2">
    <div class="card__overline">
      <div class="card-testimonial flex items-center space-x-2">
        <img
          alt="Vue logo"
          class="avatar"
          src="@/assets/demo-avatar.png"
          width="32"
          height="32"
        />
        <div class="card-testimonial__info">
          <div class="card-testimonial-info__name text-conduit">
            {{ author.username }}
          </div>
          <div class="card-testimonial-info__date text-gray-600">
            December9, 22
          </div>
        </div>
      </div>
    </div>
    <div class="card__title cursor-pointer">
      <p class="card-title__main">
        {{ title }}
      </p>
      <p class="card-title__pre">{{ description }}</p>
    </div>
    <div class="card__actions text-gray-300 flex justify-between">
      <div>read more...</div>
      <div class="flex space-x-2">
        <span
          v-for="(tag, i) in tagList"
          :key="i"
          class="rounded-2xl px-1 border-2 border-gray-200"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCard",
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    tagList: {
      type: Array,
      default: () => [],
    },
    author: {
      type: Object,
      default: () => {},
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar {
  @apply rounded-full;
}
.card {
  @apply py-6 px-0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.card-title {
  &__main {
    @apply font-semibold text-2xl mb-1;
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
