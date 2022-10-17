<template>
  <div class="frame">
    <n-space vertical>
      <n-card size="huge" title="动态">
        <template v-if="globalVar.loginStatus.loggedin"><PostEditFrame /></template>
        <n-tabs
          class="card-tabs"
          default-value="all"
          size="large"
          animated
          style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="all" tab="全部">
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <n-pagination style="justify-content: center" :page-count="5" />
          </n-tab-pane>

          <n-tab-pane name="following" tab="关注的人">
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <n-pagination style="justify-content: center" :page-count="5" />
          </n-tab-pane>

          <n-tab-pane name="friends" tab="朋友">
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <n-pagination style="justify-content: center" :page-count="5" />
          </n-tab-pane>

          <n-tab-pane name="zone" tab="圈子">
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <div class="card"><dynamic-frame /></div>
            <n-pagination style="justify-content: center" :page-count="5" />
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-space>
    <div class="dynamic-footer">
      历史是有限的，但未来是无限的<br />
      看点新的吧？<n-button quaternary type="primary">刷新一下</n-button>
    </div>
  </div>
</template>

<script>
import { globalVar } from "../globalvar";
import { defineComponent, ref } from "vue";
import { NSpace, NCard, NButton, NPagination, NTabs, NTabPane } from "naive-ui";
import DynamicFrame from "./DynamicFrame.vue";
import PostEditFrame from "./PostEditFrame.vue";
export default defineComponent({
  setup() {
    return {
      globalVar,
    };
  },
  components: {
    NSpace,
    NCard,
    NButton,
    NPagination,
    NTabs,
    NTabPane,
    DynamicFrame,
    PostEditFrame,
  },
});
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
