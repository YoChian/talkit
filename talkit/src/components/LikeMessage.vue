<template>
  <n-button text tag="div">
    <div class="dynamic-list-frame">
      <div class="dynamic-list-left">
        <n-avatar-group
          :options="avatarOptions"
          :max="3"
          size="large"
          style="font-size: 24px"
          @click="openUserHome"
          >关</n-avatar-group
        >
      </div>
      <div class="dynamic-list-right">
        <div style="display: flex">
          <n-text style="font-weight: 1000; font-size: medium" @click="openUserHome">
            路人1，路人2
          </n-text>
          等5人赞了你的博客
        </div>
        <n-ellipsis style="max-width: 100%; color: grey">
          你被赞的博客的概览，如果他的内容超过一定限度，那么它应当被省略过长的后半段，使其能够被容纳在消息盒子内，而不是超出或者换行，接下来的内容应该被折叠
        </n-ellipsis>
      </div>
    </div>
  </n-button>
  <n-divider />
</template>

<script>
import { defineComponent } from "vue";
import { NAvatarGroup, NButton, NEllipsis, NText, NDivider } from "naive-ui";
export default defineComponent({
  setup() {
    return {
      avatarOptions: [
        {
          name: "张三",
          src:
            "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
        },
        {
          name: "李四",
          src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        },
        {
          name: "王五",
          src:
            "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
        },
        {
          name: "赵六",
          src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        },
        {
          name: "七仔",
          src:
            "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
        },
      ],
    };
  },
  components: { NAvatarGroup, NButton, NEllipsis, NText, NDivider },
});
</script>

<style lang="scss" scoped>
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
  width: 800px;
}
</style>
