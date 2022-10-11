<template>
  <n-modal v-model:show="showPostModal">
    <n-card
      style="width: 568px"
      title="发表博客"
      preset="card"
      closable
      @close="showPostModal = false"
    >
      <PostEditFrame />
    </n-card>
  </n-modal>
</template>

<script>
import { defineComponent } from "vue";
import { NModal, NCard } from "naive-ui";
import PostEditFrame from "./PostEditFrame.vue";
export default defineComponent({
  props: { showPostModalProp: Boolean },
  data() {
    return {
      showPostModal: false,
    };
  },
  watch: {
    showPostModalProp(newValue, oldValue) {
      if (newValue == true) {
        this.showPostModal = newValue;
      }
    },
    showPostModal(newValue, oldValue) {
      if (newValue == false) {
        this.$emit("hidePostModal");
      }
    },
  },
  components: { NModal, NCard, PostEditFrame },
});
</script>

<style lang="scss" scoped></style>
