<script setup>
import MainFrame from "./components/MainFrame.vue";
import LeftFrame from "./components/LeftFrame.vue";
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
          <div class="mainframe">
            <aside class="left-aside"><LeftFrame /></aside>
            <main>
              <MainFrame />
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
import { NLayout, NLayoutContent, NLayoutHeader, NBackTop } from "naive-ui";
export default defineComponent({
  components: {
    NConfigProvider,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NBackTop,
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
