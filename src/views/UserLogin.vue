<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
  </div>
  <div class="login">
    <div class="title">
      <h2>Login</h2>
      <div class="info">请如实填写</div>
    </div>
    <div class="operation">
      <div class="left">
        <transition-group name="up">
          <input v-if="step == 1" type="text" placeholder="Username" />
          <input v-if="step == 2" type="password" placeholder="Password" />
          <input v-if="step == 3" placeholder="登录成功!" disabled />
        </transition-group>
      </div>
      <div class="right" @click="step++">下一步</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { reactive } from "vue";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
var step: Ref<number> = ref(1);
const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};
const options = reactive({
  background: {
    color: {
      value: "#000", // 粒子颜色
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        // 开启鼠标点击的效果
        enable: true,
        mode: "push",
      },
      onHover: {
        // 开启鼠标悬浮的效果(线条跟着鼠标移动)
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      // 配置动画效果
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      grab: {
        distance: 200,
        duration: 0.4,
      },
      attract: {
        // 鼠标悬浮时，集中于一点，鼠标移开时释放产生涟漪效果
        distance: 200,
        duration: 0.4,
        factor: 5,
      },
    },
  },
  particles: {
    color: {
      value: "#6AECFF", // 粒子点的颜色
    },
    links: {
      color: "#6AECFF", // 线条颜色
      distance: 150,
      enable: true,
      opacity: 0.5, // 不透明度
      width: 2, // 线条宽度
    },
    collisions: {
      enable: true,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 1, // 移动速度
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
});
</script>

<style scoped>
.login {
  width: 360px;
  height: 200px;
  margin: 50px auto;
  font: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman",
    serif;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  background: #fff;
  /* padding: 10px 40px 25px; */
}
.login .title {
  text-align: left;
  line-height: 16px;
  height: 100px;
}
.login .title h2 {
  padding: 15px 0;
}

.login .operation {
  height: 100px;
  display: flex;
  border-radius: 15px;
}
.login .operation .left {
  width: 70%;
  background: rgb(209, 210, 212);
  height: 100%;
  border-bottom-left-radius: 15px;
}
.login .operation .left input {
  border: none;
  outline: none;
  background: transparent;
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
  font-size: 18px;
}
.login .operation .left input[disabled] {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
}
.login .operation .right {
  width: 30%;
  background: rgb(103, 125, 173);
  height: 100%;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
