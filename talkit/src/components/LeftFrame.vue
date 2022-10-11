<template>
  <div class="left-frame">
    <n-space vertical>
      <template v-if="globalVar.loginStatus.loggedin">
        <n-card size="huge">
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              margin-bottom: 20px;
            "
          >
            <div>
              <n-avatar round :size="64" style="font-size: 48px">你</n-avatar>
            </div>
            <div>
              <n-text style="margin-left: 10px; font-size: large; font-weight: 1000">
                你的昵称
              </n-text>
            </div>
          </div>
          <div>
            <n-space justify="space-between">
              <n-statistic label="关注" :value="3" />
              <n-statistic label="粉丝" :value="0" />
              <n-statistic label="博客" :value="4" />
            </n-space>
          </div>
        </n-card>
      </template>
      <template v-if="globalVar.loginStatus.loggedin">
        <n-card size="huge" title="关注">
          <follow-dynamic-list-frame /><follow-dynamic-list-frame /><follow-dynamic-list-frame />
        </n-card>
      </template>
    </n-space>
  </div>
</template>

<script>
import { globalVar } from "../globalvar";
import { defineComponent } from "vue";
import { NSpace, NSkeleton, NCard, NText, NAvatar, NStatistic, NH3 } from "naive-ui";
import FollowDynamicListFrame from "./FollowDynamicListFrame.vue";
export default defineComponent({
  data() {
    return { globalVar };
  },
  components: {
    NSpace,
    NSkeleton,
    NCard,
    NText,
    NAvatar,
    NStatistic,
    NH3,
    FollowDynamicListFrame,
  },
});
</script>

<style lang="scss" scoped></style>
