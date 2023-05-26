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
    <div class="title">Tx在线炒股平台</div>
    <div class="login-form">
      <el-input
        v-model="userInfo.account"
        placeholder="Please input account"
        class="transparent-input"
      />
      <el-input
        v-model="userInfo.password"
        placeholder="Please input password"
        class="transparent-input"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};
const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};
const userInfo = reactive({
  account: "",
  password: "",
});
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
}
.login .title {
  text-align: center;
  font-size: 36px;
  color: #ffffff;
  font-family: "YouSheBiaoTiHei" !important;
  padding-bottom: 10px;
  font-weight: normal;
}
.login .login-form {
  width: 500px;
  max-width: 100%;
  padding: 25px 40px;
  height: 360px;
  background: transparent;
  margin: 10% auto;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.22);
  border: 2px solid;
  -moz-box-shadow: 1px 1px 12px rgba(76, 206, 240, 0.5);
  -webkit-box-shadow: 1px 1px 12px rgba(76, 206, 240, 0.5);
  box-shadow: 1px 1px 12px rgba(76, 206, 240, 0.5);
  border: 1px solid rgba(76, 206, 240, 0.5);
}
.login .login-form .el-input .el-input__inner {
  background-color: transparent  !important;
}
</style>
