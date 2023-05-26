<!-- 登录日志 -->
<template>
  <div class="search">
    <!-- <el-icon class="clock"></el-icon> -->
    上次登录: {{ time }}
  </div>
</template>

<script lang="ts" setup>
import { dayjs } from "element-plus";
import {onMounted,ref} from "vue"
const time = ref<string | null>(null);

onMounted(()=>{
    time.value = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
})

</script>

<style>
.login_time {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 300px;
}
</style>