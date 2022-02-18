import { createApp } from 'vue';
import App from './App.vue';

// 路由
import router from './router';

// 全局样式
import 'styles/base.scss';

/*
// 全局引用ElementPlus
import ElementPlus from 'plugins/element-plus';
*/

/*
// 按需引入element
import 'element-plus/packages/theme-chalk/src/base.scss';
import { ElButton, ElInput } from 'element-plus';
*/
import SomeElementPlus from 'plugins/element-plus';


const app = createApp(App);

// 路由
app.use(router);

// 全局引入element
//app.use(ElementPlus)
/*
// 按需引入element
app.use(ElButton);
app.use(ElInput);
*/
app.use(SomeElementPlus);

// 挂载
app.mount('#app');
