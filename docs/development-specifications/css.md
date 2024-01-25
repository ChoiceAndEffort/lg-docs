# CSS 规范

## 前言：

> 目的：使前端样式代码规范、标准、统一

> 目标：使产业互联网项目完美实现换肤（自定义主题和主题切换）

## 1.书写规范

### 1.1 命名

- id：语义化，少用慎用，避免样式污染
- class：小写，中划线 ‘-’或者双下划线 '\_\_' 拼接 ，避免简写，推荐 BEM 命名规范

```css
/*正例*/
.app__header-logo {
  height: 50px;
}
```

```css
/*反例*/
.appHead_logo {
  height: 50px;
}
```

### 1.2 格式化

- 缩进、换行、空格、分号结尾

```css
/*正例*/
.app__content {
  flex: 1;
  border: 1px solid #ccc;
}
```

```css
/*反例*/
.app__content{
flex: 1
 border: 1px solid #ccc
}
```

### 1.3 注释 /\* \*/ 、//

- 推荐 /\* \*/

```css
/* 正例 */

/* 底部页脚 */
.app__footer {
  width: 100vw;
  height: 60px;
}
/* 全局字号 */
$font-size: 14px;

/* 详情页-卡片 */
@mixin --mix-details-card {
  min-width: 200px;
  font-size: $font-size;
}
```

```css
/* 反例 */
.app__footer {
  width: 100vw;
  height: 60px;
}
// 字体
$font-size: 14px;
/* 卡片 */
@mixin details-card {
  min-width: 200px;
  font-size: $font-size;
}
```

### 1.4 选择器

- 推荐：类、标签
- 避免：通配符选择器、id 选择器、嵌套层级过多

```css
/* 正例 */
/*结构层次分明*/
.app {
  .app__header {
    .app-logo {
    }
    .app-info {
    }
  }
  .app__container {
    .app-sidebar {
    }
    .app-conetnt {
    }
  }
  .app__footer {
  }
}
```

```css
/* 反例 */
/*层次太多太杂,难以准确选择到目标标签*/
.app .app__header .app__logo img {
}
.app {
  div {
    ul {
      li {
        div {
          span {
          }
        }
      }
    }
  }
}
```

### 1.5 值

#### 1.5.1 长度单位

- px：像素 （常用 推荐）
- em：相对元素 font-size 的倍数
- rem：相对根字体大小，html 标签就是根
- %：相对父元素计算
- vw：视口宽度的百分比
- vh：视口高度的百分比

<font color=#E6A23C style="font-weight:bold" > 注： 推荐使用 px，其他视情况而定，单位简写 </font>

```css
/* 正例 */
.main {
  border-width: .5px;
  margin: .8px;
}
```

```css
/* 反例 */
.main {
  border-width: 0.5px;
  margin: 0.8px;
}
```

#### 1.5.2 颜色单位

- HEX/HEXA：#ff0000; （常用 推荐）
- 单词：red、green、blue
- Rgb/rgba：rgb(0,0,0); rgba(255,255,255,0.5);
- HSL/HSLA：hsl(色相，饱和度，亮度)
  <font color=#E6A23C style="font-weight:bold" > 注： 推荐使用 HEX/HEXA 二进制 ，简写、小写
  </font>

```css
/* 正例 */
.main {
  color: #fff;
  background-color: #000;
}
```

```css
/* 反例 */
.main {
  color: #ffffff;
  background-color: #000000;
}
```

### 1.6 兼容性

- 添加浏览器内核私有前缀 -webkit-、 -moz-、 -ms-、 -o-
- 向下兼容，优雅降级
- webpack、vite 等构建工具会根据打包配置自动添加浏览器前缀，进行兼容处理打包代码。

### 1.7 媒体查询

> 作用： 根据屏幕尺寸和设备类型 调整样式

> 避免： 同一个样式表中写入大量的媒体查询

- 用法一：

```css
<link rel="stylesheet" media="具体的媒体查询" href="mystylesheet.css">
```

- 用法二：

```css
/* 在电子屏幕（电脑屏幕、平板屏幕、手机屏幕） 中 屏幕宽度小于768px*/
@media screen and (max-width: 768px) {
  /*CSS-Code;*/
}
/* 在电子屏幕（）中 屏幕宽度 大于768px  小于 1200px */
@media screen and (min-width: 768px) and (max-width: 1200px) {
  /*CSS-Code;*/
}
```

## 2.书写顺序

### 2.1 位置布局

> display、position、float、clear

### 2.2 盒模型

> width、height、margin、padding

### 2.3 文字、背景和边框

> background、border

### 2.4 动画和过度

> animation、transition

### 2.5 其他

> box-shadow、text-shadow、outline

<font color=#E6A23C  > 思维引导：找东西的步骤 1.（位置）在哪里？2.(盒模型)是个多大的东西？3.（文字背景颜色）具体长什么样的？4.（动画过度）它有什么动态技能？5.(其他)可能还会什么？</font>

```css
.main {
  /* 位置 */
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  z-index: 1;
  /* 盒模型 */
  width: 200px;
  height: 200px;
  padding: 0;
  margin: 0;
  /* 文字、背景、边框 */
  font-size: 16px;
  line-height: 20px;
  letter-spacing: normal;
  color: #fff;
  text-align: left;
  background-color: #c1c1c1;
  border: 1px solid #000;
  /* 动画、过度 */
  animation: none;
  transform: scale(0.8);
  /* 其他 */
  text-shadow: none;
}
```

```css
/* 反例 */
.main {
  background-color: #000;
  z-index: 2;
  text-align: center;
  line-height: 20px;
  width: 200px;
  animation: none;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  height: 200px;
}
```

### 3.作用域 / 穿透

#### 3.1 scoped

> 作用：在 style 标签上绑定了自定义属性，防止 css 全局污染

```css
<style>
    /*公共样式*/
</style>
<style scoped>
    /*私有样式*/
</style>
```

#### 3.2 /deep/、 ::v-deep、:deep()

- 作用：样式穿透，可以在使用 scoped 情况下 改变 第三方组件类名 样式
- 注意：vue3.0 不推荐使用 ‘/deep/’
- 主推：:deep()

```css
/deep/ .el-button {
  color: #000;
}
::v-deep .el-button {
  color: #fff;
}
:deep(.el-button) {
  color: #000;
}
```

### 4.sass/less

#### 4.1 嵌套 {{ }}

> 将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器样式结构清晰

```css
#app {
  width: 100vw;
  height: 100%;
  .header {
    height: 48px;
    width: 100%;
    .header-logo {
      width: 260px;
      height: 44px;
    }
  }
}
```

#### 4.2 变量 $

```css
$--color: #4d85ff;
$--border: 1px solid #c1c1c1;
$--border-radius: 4px;
.details-card {
  width: 400px;
  height: 260px;
  color: $--color;
  border: $--border;
  border-radius: $--border;
}
```

#### 4.3 混合 @mixin

```css
$--color: #4d85ff;
$--border: 1px solid #c1c1c1;
$--border-radius: 4px;
/* 详情页 卡片样式*/
@mixin --mix-details-card {
  width: 400px;
  height: 260px;
  color: $--color;
  border: $--border;
  border-radius: $--border;
}
.details-card {
  /* 引用 */
  @include --mix-details-card;
}
```

#### 4.4 导入 @import

```css
@import './base/index.scss'; //初始化、基础
@import './state/index.scss'; //状态
@import './mixin/index.scss'; //混合
```

### 5.styles 文件目录 \*\*

#### 5.1 目录结构

```
-styles
  |-index.scss
  |-initial (初始化)
  |-base（基础）
  |-theme（主题）
  |-state（状态）
  |-mixin (混合)
  |-ui （ui 组件）
  |-layout（布局）
  |-module（模块）
  |-other (其他)
```

#### 5.2 文件说明

```css
 styles
 -index.scss
      输出文件，依照指定的引入顺序(5.1目录结构)引入styles文件下的所有样式文件
-initial  (初始化)
      初始化样式文件，借用淘宝
      命名：标签
      必要：是
      
 -base（基础）
      基础样式文件，字体、边框圆角、内边距、外边距 （可附带尺寸类型size: small mini）
      命名：--hb-
      必要：是

 -theme（主题）
      适用于主题切换和自定义主题（字体颜色，背景色，边框色等）
      命名： --white-   、  --black-   、--th-
      必要：是，主题切换和自定义主题必有其一

 -state（状态）
      状态：选中、获取焦点，失去焦点、滑入，滑出，鼠标按下，鼠标松开。
      命名：is-  拼接
      必要：是

 -mixin (混合)
      重复使用的样式，重复使用的样式代码块。
      命名：--mix-     拼接
      必要：是

 -ui （ui组件）
      放置需要统一修改ui组件样式。
      命名：继承组件库命名
      必要：否，视情况而定

 -layout（布局）
      页面布局样式(整体布局，列表页布局、详情页布局)。
      命名：l-      拼接
      必要：否，视情况而定

 -module（模块）
      模块：根据路由分模块，放置模块内可单独复用的样式
      命名：'--'+模块名称 + ‘-’   拼接
      必要：否，视情况而定

 -other (其他)
       其他：其他可复用的样式文件（插件）
      命名：推荐使用 BEM 命名规范
      必要：否，视情况而定

```

#### 5.3 规则

1. 所有放在 styles 文件夹里面的样式均是可复用的 ；
2. 所有放在 styles 文件夹里面的样式均需要写样式注释（说明）；
3. styles 文件夹的子文件夹，需要则写，不需要则不写；
4. index.scss 为输出文件、引入顺序如上文件列表排序由上至下；

### 6.布局

- 6.1 流式布局
  > 元素按照其在 HTML 中出现的顺序自动排列，元素的宽度会根据父元素的宽度自动调整适用于简单的页面布局、上中下
- 6.2 定位布局
  > 通过设置元素的定位属性（position）来实现布局，元素可以根据父元素或其他元素进行定位。适用于绝对定位和相对定位的布局。
- 6.3 浮动布局
  > 通过设置元素的浮动属性（float）来实现布局，元素会脱离文档流并按照指定的方向浮动， 适用于多列布局，左中右
- 6.4 弹性布局
  > 通过设置容器元素的 display 属性为 flex 或 inline-flex 来实现布局，容器内的子元素可以根据指定的比例自动调整大小和位置 适用于 子容器 大小宽高 不确定 时的布局，和一些相对复杂的布局
- 6.5 网格布局
  > 通过设置容器元素的 display 属性为 grid 来实现布局，容器内的子元素可以按照指定的网格进行布局 适用于复杂的页面布局，宫格布局。
- 6.6 响应式布局
  > 通过使用媒体查询（Media Query）和 CSS Grid 等技术来实现不同屏幕尺寸下的布局调整， 适用于适配不同设备和屏幕尺寸的布局。


### 7.架构
#### 7.1 原子化CSS
将CSS样式拆分成最小的可复用的单元，通过组合这些单元来构建页面。
####  7.2 BEM（Block Element Modifier）
将页面拆分成独立的块（Block），每个块包含一个或多个元素（Element），并通过修改器（Modifier）来改变块或元素的样式。这种方式可以提高代码的可读性和可维护性，但需要注意命名规范和层级关系。
●block {}，block 代表了更高级别的抽象或组件。
●block__element {}，代表 .block 的后代，用于形成一个完整的 .block 的整体。
●block–modifier {}，代表 .block 的不同状态或不同版本。  
参考地址：https://juejin.cn/post/7021461539236347940
####  7.3 OOCSS（Object-Oriented CSS）
将CSS样式抽象成可复用的对象，通过组合这些对象来构建页面。这种方式可以提高代码的复用性和可维护性，但需要注意对象的设计和组合方式。
####  7.4 SMACSS（Scalable and Modular Architecture for CSS）
将CSS样式按照功能和层级进行分类，通过模块化的方式来组织和管理样式。这种方式可以提高代码的可维护性和可扩展性，但需要注意模块的划分和命名规范。
####  7.5 CSS-in-JS
将CSS样式直接写在JavaScript代码中，通过JavaScript的能力来管理和组织样式。这种方式可以提高代码的可维护性和可扩展性，但需要注意代码的性能和复杂度。

