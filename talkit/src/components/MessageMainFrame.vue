<template>
  <n-card style="height: -webkit-fill-available">
    <div style="position: relative; height: 100%">
      <n-layout position="absolute">
        <n-layout-content style="height: 100%" :native-scrollbar="false">
          <template v-if="menuValue == 'like'">
            <LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage /><LikeMessage />
          </template>
          <template v-else-if="menuValue == 'reply'">
            <ReplyMessage /><ReplyMessage /><ReplyMessage /><ReplyMessage /><ReplyMessage />
          </template>
          <template v-else-if="menuValue == 'at'">
            <n-empty description="现在还没有消息" size="huge"></n-empty>
          </template>
          <template v-else-if="menuValue == 'message'"></template>
          <template v-else-if="menuValue == 'system'">
            <n-empty description="现在还没有消息" size="huge"></n-empty>
          </template>
        </n-layout-content>
      </n-layout>
    </div>
  </n-card>
  <n-card
    v-if="menuValue == 'message'"
    style="margin-top: 10px"
    content-style="display:flex"
  >
    <n-input
      type="textarea"
      maxlength="200"
      size="large"
      :autosize="{ minRows: 2, maxRows: 5 }"
      style="width: 100%"
      placeholder="发送消息"
      show-count
    >
    </n-input>
    <n-button type="primary" style="align-self: center; margin-left: 10px">发送</n-button>
  </n-card>
</template>

<script>
import { defineComponent } from "vue";
import {
  NCard,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NEmpty,
  NInput,
  NButton,
} from "naive-ui";
import LikeMessage from "./LikeMessage.vue";
import ReplyMessage from "./ReplyMessage.vue";
export default defineComponent({
  props: { menuValue: String },
  components: {
    NCard,
    NLayout,
    NLayoutContent,
    NLayoutSider,
    NEmpty,
    NInput,
    NButton,
    LikeMessage,
    ReplyMessage,
  },
});
</script>

<style lang="scss" scoped></style>
