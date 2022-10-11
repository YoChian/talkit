<template>
  <div class="right-frame">
    <n-space vertical>
      <n-card size="huge" title="热点">
        <n-skeleton round />
        <n-skeleton text />
        <br />
        <n-skeleton round />
        <n-skeleton text />
        <br />
        <n-skeleton round />
        <n-skeleton text />
        <br />
        <n-skeleton round />
        <n-skeleton text />
        <br />
        <n-skeleton round />
        <n-skeleton text />
        <br
      /></n-card>
    </n-space>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { NSpace, NSkeleton, NCard } from "naive-ui";
export default defineComponent({
  components: {
    NSpace,
    NSkeleton,
    NCard,
  },
});
</script>

<style lang="scss" scoped></style>
