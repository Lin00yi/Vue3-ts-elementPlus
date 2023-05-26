<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <!-- menu侧边菜单 -->
    <el-aside width="fit-content" :style="{ background: bg_color }">
      <el-scrollbar>
        <el-menu
          :background-color="bg_color"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :collapse="isMenuCollapsed"
          active-text-color="#ffd04b"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><Location /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4" @click="handleMenuItem('login')">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 头部区域 -->
    <el-container>
      <el-header
        style="text-align: right; font-size: 12px"
        :style="{ 'background-color': bg_color }"
      >
        <TimeColck />
        <LoginTime class="login_time"></LoginTime>
        <div class="scale">
          <el-button @click="toggleZoom">
            <template v-if="isZoomedIn">缩小</template>
            <template v-else>放大</template>
          </el-button>
        </div>

        <UserDropdown class="user_dropdown"></UserDropdown>
      </el-header>
      <div class="collapseDiv">
        <el-button type="primary" @click="toggleMenu">
          <div v-if="isMenuCollapsed">Expanded</div>
          <div v-else>Collapse</div>
        </el-button>
      </div>
      <!-- 主要区域 -->
      <el-main>
        <el-scrollbar>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table> -->
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import {
  Menu as IconMenu,
  Message,
  Setting,
  Location,
} from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { inject } from "vue";
import { useRouter } from "vue-router";
const bg_color = inject("color");
const route = useRouter();
const handleMenuItem = (path: string) => {
  route.push(path);
};

const store = useStore();
const toggleMenu = () => store.dispatch("menu/toggleMenu");
const isMenuCollapsed = computed(() => store.getters["menu/isMenuCollapsed"]);
var isZoomedIn = false;
const toggleZoom = () => {
  // if (isZoomedIn) {

  // } else {

  // }
  isZoomedIn = !isZoomedIn;
};
// const item = {
//   date: "2016-05-02",
//   name: "Tom",
//   address: "No. 189, Grove St, Los Angeles",
// };
// const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .scale {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 200px;
}
.collapseDiv {
  width: fit-content;
  box-sizing: border-box;
  margin: 10px;
}
</style>
