<script setup>
import HomePageMainFrame from "./components/HomePageMainFrame.vue";
import HomePageLeftFrame from "./components/HomePageLeftFrame.vue";
import RightFrame from "./components/RightFrame.vue";
import HeaderFrame from "./components/HeaderFrame.vue";
import UserProfilePopOver from "./components/UserProfilePopOver.vue";
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
  >
    <div style="position: relative; height: 100vh">
      <n-layout position="absolute">
        <n-layout-header bordered style="height: 60px; width: 100%">
          <HeaderFrame />
        </n-layout-header>
        <n-layout-content
          :native-scrollbar="false"
          style="
            position: absolute;
            top: 60px;
            bottom: 0;
            width: 100%;
            background-color: rgb(250, 250, 252);
          "
        >
          <n-back-top :right="100" />
          <div class="header">
            <n-avatar round :size="128" style="font-size: 100px; margin-bottom: 10px">
              你
            </n-avatar>
            <n-text style="font-size: x-large; font-weight: 1000"> 你的昵称 </n-text>
            <n-space>
              <n-button type="primary">关注</n-button>
              <n-button color="#ededed" text-color="#000">发消息</n-button>
            </n-space>
          </div>
          <div class="mainframe">
            <aside class="left-aside"><HomePageLeftFrame /></aside>
            <main>
              <HomePageMainFrame />
            </main>
            <aside class="right-aside"><RightFrame /></aside>
          </div>
        </n-layout-content>
      </n-layout>
    </div>
    <UserProfilePopOver />
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import {
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NBackTop,
  NAvatar,
  NText,
  NSpace,
  NButton,
} from "naive-ui";
export default defineComponent({
  components: {
    NConfigProvider,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NBackTop,
    NAvatar,
    NText,
    NSpace,
    NButton,
  },
  setup() {
    return {
      zhCN,
      dateZhCN,
    };
  },
});
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-image: url(src/img/banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.mainframe {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
main {
  width: 650px;
  margin-left: 12px;
  margin-right: 12px;
}
.left-aside {
  width: 250px;
}
.right-aside {
  width: 250px;
}
</style>
