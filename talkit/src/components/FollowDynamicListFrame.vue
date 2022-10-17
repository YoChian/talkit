<template>
  <n-button text tag="div">
    <div class="dynamic-list-frame">
      <div class="dynamic-list-left">
        <n-badge :value="5">
          <n-avatar
            round
            size="large"
            style="font-size: 24px"
            @mouseenter="showProfile"
            @mouseleave="hideProfile"
            @click="openUserHome"
            >关</n-avatar
          >
        </n-badge>
      </div>
      <div class="dynamic-list-right">
        <n-text
          style="font-weight: 1000; font-size: medium"
          @mouseenter="showProfile"
          @mouseleave="hideProfile"
          @click="openUserHome"
          >关注的用户1</n-text
        >
        <n-ellipsis style="max-width: 100%; color: grey">
          一段新发布的博客的概览,它应当被省略后半段
        </n-ellipsis>
      </div>
    </div>
  </n-button>
</template>

<script>
import { globalVar } from "../globalvar";
import { defineComponent } from "vue";
import { NAvatar, NBadge, NText, NEllipsis, NButton, NPopover } from "naive-ui";
export default defineComponent({
  data() {
    return { globalVar };
  },
  methods: {
    showProfile(e) {
      globalVar.profilePopoverUpdate(true, e.clientX, e.clientY);
    },
    hideProfile(e) {
      globalVar.profilePopoverUpdate(false, e.clientX, e.clientY);
    },
    openUserHome() {
      window.open("homepage.html", "_blank");
    },
  },
  components: { NAvatar, NBadge, NText, NEllipsis, NButton, NPopover },
});
</script>

<style scoped>
.dynamic-list-frame {
  display: flex;
  margin-bottom: 15px;
}
.dynamic-list-left {
  margin-right: 10px;
}
.dynamic-list-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 128px;
}
</style>
