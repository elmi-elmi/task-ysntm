<template>
  <CommonBanner :description="$route.params.slug" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommonBanner from "@/components/common/Banner.vue";

export default defineComponent({
  name: "SectionHomeBanner",
  components: { CommonBanner },
  data() {
    return {
      description: "A place to share your knowledge.",
      bgColor: "bg-grey-800",
    };
  },
});
</script>
