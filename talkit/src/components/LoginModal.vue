<template>
  <n-modal v-model:show="showLoginModal">
    <n-card style="width: 600px">
      <n-tabs
        class="card-tabs"
        :default-value="tab"
        size="large"
        animated
        style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <n-tab-pane name="signin" tab="登录">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong @click="login"> 登录 </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="重复密码">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong @click="login"> 注册 </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  NModal,
  NCard,
  NTabs,
  NTabPane,
  NForm,
  NFormItemRow,
  NButton,
  NInput,
} from "naive-ui";
export default defineComponent({
  props: { showLoginModalProp: Boolean, tab: String },
  data() {
    return { showLoginModal: false };
  },
  watch: {
    showLoginModalProp(newValue, oldValue) {
      if (newValue == true) {
        this.showLoginModal = newValue;
      }
    },
    showLoginModal(newValue, oldValue) {
      if (newValue == false) {
        this.$emit("showStatusChanged");
      }
    },
  },
  methods: {
    login() {
      this.$emit("loggedin");
      this.showLoginModal = false;
    },
  },
  components: { NModal, NCard, NTabs, NTabPane, NForm, NFormItemRow, NButton, NInput },
});
</script>

<style lang="scss" scoped></style>
