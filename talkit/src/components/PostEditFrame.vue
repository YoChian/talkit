<template>
  <div class="card">
    <n-input
      type="textarea"
      maxlength="200"
      size="large"
      :autosize="{ minRows: 2, maxRows: 5 }"
      style="width: 100%"
      placeholder="说点什么吧"
      show-count
    >
    </n-input>
  </div>
  <n-collapse-transition :show="showTimePicker">
    <div class="card" style="display: flex; justify-content: flex-end">
      <n-date-picker /><n-time-picker />
    </div>
  </n-collapse-transition>
  <div class="card">
    <n-space justify="space-between">
      <n-space>
        <n-button text style="font-size: 30px"><icon-emoji /></n-button>
        <n-upload
          :default-file-list="filelist"
          list-type="image"
          :create-thumbnail-url="createThumbnailUrl"
        >
          <n-button text style="font-size: 30px"><icon-image /></n-button>
        </n-upload>
        <n-button text style="font-size: 30px"><icon-at /></n-button>
        <n-button text style="font-size: 30px"><icon-hash-tag /></n-button>
      </n-space>
      <n-space>
        <n-button text style="font-size: 30px" @click="showTimePicker = !showTimePicker"
          ><icon-timer
        /></n-button>
        <n-select
          v-model:value="visibility"
          :options="visibilityOptions"
          :consistent-menu-width="false"
        />
        <n-button type="primary">发送</n-button>
      </n-space>
    </n-space>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  NSpace,
  NSkeleton,
  NInput,
  NCard,
  NButton,
  NUpload,
  NTooltip,
  NSelect,
  NDatePicker,
  NTimePicker,
  NCollapseTransition,
} from "naive-ui";
import IconImage from "./icons/IconImage.vue";
import IconEmoji from "./icons/IconEmoji.vue";
import IconAt from "./icons/IconAt.vue";
import IconHashTag from "./icons/IconHashTag.vue";
import IconTimer from "./icons/IconTimer.vue";
export default {
  setup() {
    return {
      visibility: ref("open"),
      visibilityOptions: [
        { label: "公开", value: "open" },
        { label: "仅粉丝", value: "fansOnly" },
        { label: "互相关注", value: "friendsOnly" },
        { label: "仅自己可见", value: "selfOnly" },
      ],
      showTimePicker: ref(false),
    };
  },
  components: {
    NSpace,
    NSkeleton,
    NInput,
    NCard,
    NButton,
    NUpload,
    NTooltip,
    NSelect,
    NDatePicker,
    NTimePicker,
    NCollapseTransition,
    IconImage,
    IconEmoji,
    IconAt,
    IconHashTag,
    IconTimer,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 5px;
}
</style>
