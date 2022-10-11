<template>
  <div class="frame">
    <n-space vertical>
      <n-card size="huge" title="动态">
        <PostEditFrame />
        <div class="card"><dynamic-frame /></div>
        <div class="card"><dynamic-frame /></div>
        <div class="card"><dynamic-frame /></div>
        <div class="card"><dynamic-frame /></div>
        <div class="card"><dynamic-frame /></div>
      </n-card>
    </n-space>
    <div class="dynamic-footer">
      历史是有限的，但未来是无限的<br />
      看点新的吧？<n-button quaternary type="primary">刷新一下</n-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NSpace, NCard, NButton } from "naive-ui";
import DynamicFrame from "./DynamicFrame.vue";
import PostEditFrame from "./PostEditFrame.vue";
export default {
  setup() {
    return {
      visibility: ref("open"),
      visibilityOptions: [
        { label: "公开", value: "open" },
        { label: "仅粉丝", value: "fansOnly" },
        { label: "互相关注", value: "friendsOnly" },
        { label: "仅自己可见", value: "selfOnly" },
      ],
      showTimePicker: ref(false),
    };
  },
  components: {
    NSpace,
    NCard,
    NButton,
    DynamicFrame,
    PostEditFrame,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 5px;
}
.dynamic-footer {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 60px;
}
</style>
