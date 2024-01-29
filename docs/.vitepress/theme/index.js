/*
 * @Author: lg
 * @Date: 2024-01-29 10:09:23
 * @LastEditors: lg
 * @LastEditTime: 2024-01-29 10:11:44
 * @Description:
 * @FilePath: \lg-docs\docs\.vitepress\theme\index.js
 */
import DefaultTheme from 'vitepress/theme';
import './style.css'; // 此处是主题的全局样式，可覆盖原主题的设置
// import type { Theme } from 'vitepress';

const define = (value) => value;
export default define({
  ...DefaultTheme, // 此处采用了默认主题，可以替换为自定义的主题
  NotFound: DefaultTheme.NotFound,
  enhanceApp: ({ app, router, siteData }) => {
    app.use('xxx'); // 一些组件或库，来增加功能
    console.log(router);
    console.log(siteData);
  }
});
