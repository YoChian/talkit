<template>
  <div class="left-frame">
    <n-space vertical>
      <n-card size="huge" title="TA的资料">
        <div>
          <n-space justify="space-between">
            <n-statistic label="关注" :value="3" />
            <n-statistic label="粉丝" :value="0" />
            <n-statistic label="博客" :value="4" />
          </n-space>
        </div>
        <div>一段个人简介，可能有很多行，简介本身会限制行数，这里就允许全部显示就好</div>
      </n-card>
      <n-card size="huge" title="TA的关注">
        <follow-dynamic-list-frame /><follow-dynamic-list-frame /><follow-dynamic-list-frame />
      </n-card>

      <n-card size="huge" title="TA的粉丝">
        <follow-dynamic-list-frame /><follow-dynamic-list-frame /><follow-dynamic-list-frame />
      </n-card>
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
