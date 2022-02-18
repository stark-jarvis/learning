import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import styleImport from 'vite-plugin-style-import';

// 处理一下路径
function resolve(dir) {
	return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://fe.56.com/lcmg/',
    resolve: {
        alias: {
            '@': resolve('src'),
            'comps': resolve('src/components'),
            'apis': resolve('src/apis'),
            'views': resolve('src/views'),
            'utils': resolve('src/utils'),
            'router': resolve('src/router'),
            'styles': resolve('src/styles'),
            'plugins': resolve('src/plugins')
        }
    },
    plugins: [
        vue(),
        styleImport({
            libs: [{
                libraryName: 'element-plus',
                esModule: true,
                ensureStyleFile: true,
                resolveStyle: (name) => { 
                    name = name.slice(3);
                    return `element-plus/packages/theme-chalk/src/${name}.scss`;
                },
                resolveComponent: (name) => { 
                    return `element-plus/lib/${name}`;
                }
            }]
        })
    ]
});

