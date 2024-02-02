<!--
 * @Author: lg
 * @Date: 2024-01-26 19:00:11
 * @LastEditors: lg
 * @LastEditTime: 2024-02-02 10:03:12
 * @Description:
 * @FilePath: \lg-docs\docs\special-subject\vite-optimization\index.md
-->

# vite 打包优化专题

## 优化的维度

- 开启 gzip 压缩 vite-plugin-compression 插件
- CDN 引入资源包 vite-plugin-cdn-import
- 打包压缩

## 代码配置

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

import viteCompression from 'vite-plugin-compression';
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import';

export default defineConfig({
  resolve: {
    //引用相对路径
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': `${resolve(__dirname, 'src')}/`
    }
  },
  build: {
    minify: 'terser',
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // 静态资源打包做处理
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        }
      }
    }
  },

  plugins: [
    vue(),
    importToCDN({
      //CDN引入包
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'CDN  url'
        },

        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'CDN  url',
          css: 'CDN  url'
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: 'CDN  url'
        }
      ]
    }),

    //开启gzip
    viteCompression({
      disable: false, //是否禁用压缩，默认为 false
      // 需要注意的是，开启 Gzip 压缩时，服务器将对文件进行实时压缩处理，这会增加一定的 CPU 开销。如果服务器资源有限或性能敏感，可以根据实际情况选择合适的文件大小阈值。
      threshold: 10240, // 文件容量大于这个值进行压缩,启用压缩的文件大小限制，单位是字节
      algorithm: 'gzip', // 压缩方式
      ext: '.gz', // 后缀名
      deleteOriginFile: false // 压缩后是否删除压缩源文件
    }),
    //打包分析
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      filename: 'stats.html', //分析图生成的文件名
      gzipSize: true, // 收集 gzip 大小并将其显示
      brotliSize: true // 收集 brotli 大小并将其显示
    })
  ]
});
```
