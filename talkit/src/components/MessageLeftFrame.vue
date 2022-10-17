<template>
  <div>
    <n-card
      ><n-menu
        :options="menuOptions"
        @update-value="switchMenu"
        v-model:value="menuValue"
      ></n-menu
    ></n-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { NMenu, NCard } from "naive-ui";
export default defineComponent({
  data() {
    return {
      menuValue: "like",
      menuOptions: [
        { label: "收到的赞", key: "like" },
        { label: "回复我的", key: "reply" },
        { label: "@我的", key: "at" },
        { label: "私信", key: "message" },
        { label: "系统消息", key: "system" },
      ],
    };
  },
  components: { NMenu, NCard },
  methods: {
    switchMenu(key, item) {
      this.$emit("menuUpdate", key);
    },
  },
});
</script>

<style lang="scss" scoped></style>
