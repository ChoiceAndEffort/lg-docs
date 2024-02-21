# 项目使用 MOCK 数据操作文档

## mock 语法参考网址

- http://mockjs.com/examples.html#Path

## 基础条件

- 保证项目是 vite 搭建的项目

## 操作步骤

<!-- - **[参考 hb-cli init-mock初始化mock环境](/hb-packages/hb-cli/init-mock)** -->

<!-- - 安装对应插件: npm i mockjs vite-plugin-mock -D

- 配置参数

```ts
// vite.config.ts
import { viteMockServe } from 'vite-plugin-mock';

plugins: [
  //    ...,
  viteMockServe({
    supportTs: false,
    mockPath: './mock/', // 解析，路径可根据实际变动
    localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
  })
  //...
];
```

- 配置 mock 启动环境

```ts
//.env.mock

VITE_APP_BASE_PATH = '/';
VITE_APP_PORT = '4001';
VITE_APP_MODE = 'dev';
VITE_APP_HOST = 'localhost';
VITE_APP_OUTPUT_DIR = 'dist';
VITE_APP_API = 'http://localhost:4001[项目端口]/';
```

```json
 //package.json
   "scripts": {
    "serve:mock": "vite --mode mock",
    "serve:dev": "vite --mode dev",
  },
```

- 项目根目录下创建 mock 文件夹,根据模块文件夹命名 mock 文件

```ts
//module-demo
import { MockMethod } from 'vite-plugin-mock';
const TIME_OUT = 500;

export default [
  //查询列表
  {
    type: 'get',
    url: '/find/list',
    timeout: TIME_OUT,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {
          'data|1-10': [
            {
              'id|+1': 1,
              name: '@cname',
              'status|1-2': 1,
              date: '@date', //1982-07-20
              time: '@time', // 11:21:39
              datetime: '@datetime', // 1972-12-16 02:04:24
              now: '@now', //当前时间 2018-07-17 18:19:29
              color: '@color', //16进制颜色值#79e0f2

              title: '@title(3, 5)', // 随机3-5个单词的title
              word: '@word(3, 5)', // 随机3-5个字母

              cword: "@cword('零一二三四五六七八九十', 5, 7)",
              ctitle: '@ctitle(3, 5)',

              url: '@url', //url地址
              region: '@region', //区域
              province: '@province', //省
              city: '@city(true)', //市
              county: '@county(true)', //区 带true则携带上级
              zip: '@zip',
              image: "@image('200x100', '#50B347', '#FFF', 'EasyMock')"
            }
          ]
        },
        msg: 'OK',
        success: true,
        timestamp: Date.now()
      };
    }
  },
  //新增
  {
    type: 'post',
    url: '/add',
    timeout: TIME_OUT,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: true,
        msg: 'OK',
        success: true,
        timestamp: Date.now()
      };
    }
  },
  //修改
  {
    type: 'post',
    url: /\/edit\/(.*)/,
    timeout: TIME_OUT,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: true,
        msg: 'OK',
        success: true,
        timestamp: Date.now()
      };
    }
  },
  //删除
  {
    type: 'post',
    url: /\/delete\/(.*)/,
    timeout: TIME_OUT,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: true,
        msg: 'OK',
        success: true,
        timestamp: Date.now()
      };
    }
  },
  //查询单个
  {
    type: 'get',
    url: /\/findOne\/(.*)/,
    timeout: TIME_OUT,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {
          'id|+1': 1,
          title: '@ctitle()',
          content: '@csentence(1,600)',
          image: "@image('200x100', '#50B347', '#FFF', 'EasyMock')",
          url: '@url' //url地址
        },
        msg: 'OK',
        success: true,
        timestamp: Date.now()
      };
    }
  },
  //文件上传
  {
    type: 'post',
    url: '/upload',
    timeout: TIME_OUT,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: "@image('200x100', '#50B347', '#FFF', 'EasyMock')",
        msg: 'OK',
        success: true,
        timestamp: Date.now()
      };
    }
  }
] as unknown as MockMethod[];
```

### mockjs 常用语法说明

```js
{
  "number|1-100": 100//1-100随机整数
   "boolean|1-2": true//true和false随机
     "array|1-10": [
    {
      {
        name:"@cname",//中文名字
        date:'@date',//"1983-02-04"
        time:'@time', // 11:21:39
        now:'@now',//"2023-06-16 15:01:11"
        //size, background, foreground, format, text
        img:"@image('200x100', '#50B347', '#FFF', 'EasyMock')",
        color:"@color",//颜色
        text:"@paragraph",//英文
        text1:"@cparagraph",//中文
        word:"@word",//单词
        title:"@title",//英文
        title1:"@ctitle",//中文
       content: '@csentence(1,600)',//内容

      }
    }
  ]

}

``` -->
