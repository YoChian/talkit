<template>
  <div class="navbar">
    <div class="navbar-left">
      <n-button quaternary @click="navtoindex">首页</n-button>
    </div>
    <div class="navbar-mid">
      <n-input-group>
        <n-auto-complete style="width: 350px">
          <template #default="{ handleInput, handleBlur, handleFocus, value: slotValue }">
            <n-input
              round
              :value="slotValue"
              placeholder="这里应该显示一个热搜的词条"
              @input="handleInput"
              @focus="handleFocus"
              @blur="handleBlur"
            />
          </template>
        </n-auto-complete>
        <n-button round type="primary">搜索</n-button>
      </n-input-group>
    </div>
    <div class="navbar-right">
      <template v-if="globalVar.loginStatus.loggedin">
        <n-dropdown :options="avatarOptions" @select="avatarDropdownSelect">
          <n-button text style="margin-right: 15px" @click="avatarDropdownSelect('home')">
            <n-avatar round>你</n-avatar>
          </n-button>
        </n-dropdown>
        <n-badge :value="3" :max="99"
          ><n-button quaternary @click="openMessage">消息</n-button></n-badge
        >
        <n-badge :value="100" :max="99"
          ><n-button quaternary @click="openMessage">通知</n-button></n-badge
        >
        <n-button quaternary @click="showPostModal">发博</n-button>
      </template>
      <template v-else>
        <n-button quaternary @click="showSignin">登录</n-button>
        <n-button quaternary @click="showSignup">注册</n-button>
      </template>
    </div>
  </div>
  <login-modal
    :showLoginModalProp="showLoginModal"
    :tab="loginModalTab"
    @showStatusChanged="changeLoginModalStatus"
    @loggedin="updateLoginStatus"
  />
  <PostEditModal :showPostModalProp="isPostModalShow" @hidePostModal="hidePostModal" />
</template>

<script>
import { globalVar } from "../globalvar";
import { defineComponent } from "vue";
import {
  NSpace,
  NAutoComplete,
  NInputGroup,
  NButton,
  NInput,
  NAvatar,
  NDropdown,
  NBadge,
} from "naive-ui";
import LoginModal from "./LoginModal.vue";
import PostEditModal from "./PostEditModal.vue";
export default defineComponent({
  data() {
    return {
      globalVar,
      showLoginModal: false,
      loginModalTab: "signin",
      isPostModalShow: false,
      avatarOptions: [
        { label: "个人主页", key: "home" },
        { label: "我的关注", key: "following" },
        { label: "我的粉丝", key: "follower" },
        { label: "编辑资料", key: "profile" },
        { label: "退出登录", key: "logout" },
      ],
    };
  },
  components: {
    NSpace,
    NAutoComplete,
    NInputGroup,
    NButton,
    NInput,
    NAvatar,
    NDropdown,
    NBadge,
    LoginModal,
    PostEditModal,
  },
  methods: {
    changeLoginModalStatus() {
      this.showLoginModal = false;
    },
    showSignin() {
      this.showLoginModal = true;
      this.loginModalTab = "signin";
    },
    showSignup() {
      this.showLoginModal = true;
      this.loginModalTab = "signup";
    },
    updateLoginStatus() {
      globalVar.loginStatus.loggedin = true;
    },
    showPostModal() {
      this.isPostModalShow = true;
    },
    hidePostModal() {
      this.isPostModalShow = false;
    },
    avatarDropdownSelect(key) {
      switch (key) {
        case "home":
          window.open("homepage.html", "_blank");
          break;
        case "logout":
          globalVar.loginStatus.loggedin = false;
          break;
        default:
          break;
      }
    },
    navtoindex() {
      window.open("/", "_self");
    },
    openMessage() {
      window.open("message.html", "_blank");
    },
  },
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.navbar-left {
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
}
.navbar-right {
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
}
</style>
