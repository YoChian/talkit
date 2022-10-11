<template>
  <div>
    <n-thing content-indented description-style="color:grey;font-size:small">
      <template #avatar
        ><n-avatar round :size="48" style="font-size: 32px">测</n-avatar></template
      >
      <template #header>测试用户1</template>
      <template #header-extra>
        <div class="dynamic-header-extra">
          <n-button type="primary" size="small">关注</n-button>
          <n-button text size="small" style="font-size: 32px">
            <icon-more />
          </n-button>
        </div>
      </template>
      <template #description>
        <n-time :time="0" :to="86400000" type="relative" /> | 重庆
      </template>
      这是一条测试用的博客，为了有测试效果，它必须要特别长，要有多长呢，起码得可以换行的程度吧
      <template #footer>
        <n-image-group show-toolbar-tooltip>
          <div class="dynamic-album">
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_01.jpg"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_02.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_03.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_04.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_05.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_06.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_07.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_08.gif"
            >
            </n-image>
            <n-image
              style="border-radius: 3px"
              width="104"
              src="/src/img/TimeToDisco(0)_2_09.gif"
            >
            </n-image>
          </div>
        </n-image-group>
      </template>
      <template #action>
        <n-space>
          <n-button text style="font-size: 18px; margin-right: 60px">
            <icon-like />15
          </n-button>
          <n-button text style="font-size: 18px; margin-right: 60px">
            <icon-comment />2
          </n-button>
          <n-button text style="font-size: 18px"> <icon-share />1 </n-button>
        </n-space>
      </template> </n-thing
    ><n-divider />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  NThing,
  NAvatar,
  NButton,
  NTime,
  NSpace,
  NDivider,
  NImageGroup,
  NImage,
} from "naive-ui";
import IconMore from "./icons/IconMore.vue";
import IconComment from "./icons/IconComment.vue";
import IconLike from "./icons/IconLike.vue";
import IconShare from "./icons/IconShare.vue";
export default defineComponent({
  components: {
    NThing,
    NAvatar,
    NButton,
    NTime,
    NSpace,
    IconMore,
    IconComment,
    IconLike,
    IconShare,
    NDivider,
    NImageGroup,
    NImage,
  },
});
</script>

<style scoped>
.dynamic-header-extra {
  display: flex;
  align-items: center;
  align-content: center;
}

.description {
  color: grey;
  font-size: smaller;
  font-weight: 100;
}

.dynamic-album {
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 4px;
}
</style>
