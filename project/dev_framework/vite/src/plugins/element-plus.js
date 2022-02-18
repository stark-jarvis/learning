/*
 * Element Plus Plugin - v1.0 (2021-08-10T11:51:22+0800)
 * Copyright 2005-2021 56.com
 */

/*
// 全局引入element 组件
import ElementPlus from 'element-plus';
// 全局引入element 样式
import 'element-plus/lib/theme-chalk/index.css';
*/

// 按需引入element
import 'element-plus/packages/theme-chalk/src/base.scss';
import { ElButton, ElInput } from 'element-plus';

export default function(app) {
    /*
    // 全局引用
    app.use(ElementPlus);
    */

    // 按需引入element
    app.use(ElButton);  
    app.use(ElInput);  
}


