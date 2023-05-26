import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
import store from './store'
import Particles from 'particles.vue3'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 全局注册el-icon
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   createApp(App).component(key, component);
// }
createApp(App).use(store).use(ElementPlus).use(router).use(Particles).mount('#app')

