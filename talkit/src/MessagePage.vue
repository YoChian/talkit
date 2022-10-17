<script setup>
import MessageMainFrame from "./components/MessageMainFrame.vue";
import MessageLeftFrame from "./components/MessageLeftFrame.vue";
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
  >
    <div style="position: relative; height: 100vh">
      <n-layout position="absolute">
        <n-layout-content
          :native-scrollbar="false"
          style="
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            background-color: rgb(250, 250, 252);
          "
          content-style="height: 100%"
        >
          <n-back-top :right="100" />
          <div class="mainframe">
            <aside class="left-aside">
              <MessageLeftFrame @menuUpdate="menuUpdate" />
            </aside>
            <main>
              <MessageMainFrame :menuValue="this.menuValue" />
            </main>
          </div>
        </n-layout-content>
      </n-layout>
    </div>
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { NLayout, NLayoutContent, NLayoutHeader, NBackTop } from "naive-ui";
export default defineComponent({
  data() {
    return { menuValue: "like" };
  },
  components: {
    NConfigProvider,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NBackTop,
  },
  methods: {
    menuUpdate(key) {
      this.menuValue = key;
    },
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
  align-items: stretch;
  height: 100%;
}
main {
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.left-aside {
  width: 250px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
