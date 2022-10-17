<template>
  <div class="frame">
    <n-space vertical>
      <n-card size="huge" title="动态">
        <n-tabs
          class="card-tabs"
          default-value="all"
          size="large"
          animated
          style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="all" tab="全部">
            <div class="card"><home-page-dynamic-frame /></div>
            <div class="card"><home-page-dynamic-frame /></div>
            <div class="card"><home-page-dynamic-frame /></div>
            <div class="card"><home-page-dynamic-frame /></div>
            <div class="card"><home-page-dynamic-frame /></div>
            <n-pagination style="justify-content: center" :page-count="5" />
          </n-tab-pane>

          <n-tab-pane name="videos" tab="视频">
            <n-text>这里还什么都没有呢</n-text>
            <n-pagination style="justify-content: center" :page-count="1" />
          </n-tab-pane>

          <n-tab-pane name="photos" tab="照片">
            <n-image-group show-toolbar-tooltip>
              <div class="dynamic-album">
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_01.jpg"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_02.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_03.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_04.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_05.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_06.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_07.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_08.gif"
                >
                </n-image>
                <n-image
                  style="border-radius: 3px"
                  width="104"
                  src="/src/img/TimeToDisco(0)_2_09.gif"
                >
                </n-image>
              </div>
            </n-image-group>
            <n-divider />
            <n-pagination style="justify-content: center" :page-count="1" />
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
import {
  NSpace,
  NCard,
  NButton,
  NPagination,
  NTabs,
  NTabPane,
  NImageGroup,
  NImage,
  NText,
  NDivider,
} from "naive-ui";
import HomePageDynamicFrame from "./HomePageDynamicFrame.vue";
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
    NImageGroup,
    NImage,
    NText,
    NDivider,
    HomePageDynamicFrame,
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

.dynamic-album {
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 4px;
}
</style>
