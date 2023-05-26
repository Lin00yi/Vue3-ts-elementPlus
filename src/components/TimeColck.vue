<!-- 世界时钟 -->
<template>
  <div class="clock">
    <h2>{{ currentTime }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const currentTime = ref<string | null>(null);
onMounted(() => {
  updateTime();
  setInterval(() => {
    updateTime();
  }, 1000);
});
const updateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  currentTime.value= `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
</script>

<style scoped>
.clock {
  font-family: "Courier New", Courier, monospace;
  /* font-size: 24px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: fit-content;
  text-align: center;
  position: absolute;
  right:500px;
  color: #000;
}
</style>
