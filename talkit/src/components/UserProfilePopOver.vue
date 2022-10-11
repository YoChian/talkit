<template>
  <n-popover
    :show="globalVar.profilePopover.isShow"
    :x="globalVar.profilePopover.x"
    :y="globalVar.profilePopover.y"
    :show-arrow="false"
    trigger="manual"
    raw
    style="background-color: white; border-radius: 8px"
  >
    <div
      class="profilepopover-backgroud"
      style="background-image: url(src/img/banner.png)"
    ></div>
    <div class="profile-content">
      <n-thing content-indented description-style="color:grey;font-size:small">
        <template #avatar>
          <n-avatar round :size="48" style="font-size: 32px">测</n-avatar>
        </template>
        <template #header>测试用户1</template>
        <template #description>
          <n-space>
            <div>关注 5</div>
            <div>粉丝 40K</div>
            <div>博客 312</div>
          </n-space>
        </template>
        一段用户的个人简介
        <template #action>
          <n-space>
            <n-button secondary type="tertiary">已关注</n-button>
            <n-button>发消息</n-button>
          </n-space>
        </template>
      </n-thing>
    </div>
  </n-popover>
</template>

<script>
import { globalVar } from "../globalvar";
import { defineComponent } from "vue";
import { NPopover, NThing, NAvatar, NSpace, NButton } from "naive-ui";
export default defineComponent({
  data() {
    return { globalVar };
  },
  components: {
    NPopover,
    NThing,
    NAvatar,
    NSpace,
    NButton,
  },
});
</script>

<style scoped>
.profilepopover-backgroud {
  height: 96px;
  width: 300px;
  border-radius: 8px 8px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.profile-content {
  padding: 15px;
}
</style>
