/*
 * @description:
 * @param:
 * @return:
 */
module.exports = {
  title: 'LG博客',
  // layout: home,
  description: 'Just playing around.',

  themeConfig: {
    siteTitle: 'LG博客', //左上角的
    logo: '/logo.png', //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
    // ],
    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧'
    },

    nav: [
      //右上角的导航栏
      {
        text: '工具',
        link: '/development-tool/nvm-use/index',
        activeMatch: '/development-tool/'
      },
      {
        text: '规范',
        link: '/standard/html/index',
        activeMatch: '/standard/'
      },
      // {
      //   text: "规章制度",
      //   link: "/rules-regulations/mentoring",
      //   activeMatch: "/rules-regulations/",
      // },
      {
        text: '项目介绍',
        link: '/project-introduction/b/vite+vue3+back',
        activeMatch: '/project-introduction/'
      },
      { text: '工具包', link: '/tools/index', activeMatch: '/tools/' },
      { text: '组件', link: '/ui/hb-ui/index', activeMatch: '/ui/' },
      {
        text: '专题',
        link: '/special-subject/vite-optimization/index',
        activeMatch: '/special-subject/'
      },
      {
        text: '常见问题',
        link: '/questions/index',
        activeMatch: '/questions/'
      },
      {
        text: '资源',
        link: '/resources/index',
        activeMatch: '/resources/'
      },
      {
        text: '技术博客',
        link: '/blog/index',
        activeMatch: '/blog/'
      }
    ],
    sidebar: {
      '/development-tool/': [
        {
          items: [
            {
              text: 'nvm使用',
              link: '/development-tool/nvm-use/index'
              // items: [
              //   {
              //     text: "下载",
              //     link: "/new-guidance/first-lesson/corporate-culture",
              //   },
              //   {
              //     text: "组织架构",
              //     link: "/new-guidance/first-lesson/organizational-structure",
              //   },
              //   {
              //     text: "考勤",
              //     link: "/new-guidance/first-lesson/attendance-system",
              //   },

              //   {
              //     text: "日报制度",
              //     link: "/new-guidance/first-lesson/daily",
              //   },
              // ],
            },
            {
              text: 'nrm使用',
              link: '/development-tool/nrm-use/index'
              // items: [
              //   {
              //     text: "开发工具介绍",
              //     link: "/new-guidance/second-lesson/development-tool",
              //   },

              // ],
            },
            {
              text: 'rimraf使用',
              link: '/development-tool/rimraf-use/index'
            },
            {
              text: 'anywhere启动服务',
              link: '/development-tool/anywhere-use/index'
            }
          ]
        }
      ],
      // "/new-guidance/": [
      //   {
      //     items: [
      //       {
      //         text: "第一课",
      //         // link: '/new-guidance/first-lesson/corporate-culture',
      //         items: [
      //           {
      //             text: "企业文化",
      //             link: "/new-guidance/first-lesson/corporate-culture",
      //           },
      //           {
      //             text: "组织架构",
      //             link: "/new-guidance/first-lesson/organizational-structure",
      //           },
      //           {
      //             text: "考勤",
      //             link: "/new-guidance/first-lesson/attendance-system",
      //           },

      //           {
      //             text: "日报制度",
      //             link: "/new-guidance/first-lesson/daily",
      //           },
      //         ],
      //       },
      //       {
      //         text: "第二课",
      //         // link: '/project-introduction/c/introduce',
      //         items: [
      //           {
      //             text: "开发工具介绍",
      //             link: "/new-guidance/second-lesson/development-tool",
      //           },
      //           {
      //             text: "代码托管工具",
      //             link: "/new-guidance/second-lesson/code-hosting",
      //           },
      //           {
      //             text: "任务管理",
      //             link: "/new-guidance/second-lesson/zen-tao",
      //           },
      //           {
      //             text: "接口管理",
      //             link: "/new-guidance/second-lesson/Interface-address",
      //           },
      //           {
      //             text: "node使用",
      //             link: "/new-guidance/second-lesson/node-introduce",
      //           },
      //           {
      //             text: "镜像管理",
      //             link: "/new-guidance/second-lesson/image-management",
      //           },
      //         ],
      //       },
      //       {
      //         text: "第三课",
      //         // link: '/project-introduction/c/introduce',
      //         items: [
      //           {
      //             text: "迭代项目",
      //             link: "/new-guidance/third-lesson/Iterative-project",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ],
      standard: [
        {
          items: [
            {
              text: '规范',
              items: [
                {
                  text: 'html规范',
                  link: '/standard/html/index'
                },
                {
                  text: 'CSS规范',
                  link: '/standard/css/index'
                },
                {
                  text: '目录规范',
                  // link: "/standard/directory/vue",
                  items: [
                    {
                      text: 'vue项目目录规范',
                      link: '/standard/directory/vue'
                    },
                    {
                      text: 'react项目目录规范',
                      link: '/standard/directory/react'
                    }
                  ]
                },

                {
                  text: 'git提交规范',
                  link: '/standard/git/index'
                },
                {
                  text: 'eslint规范',
                  link: '/standard/eslint/index'
                }
                // {
                //   text: "流程图设计规范",
                //   link: "",
                // },
                // {
                //   text: "组件开发规范",
                //   link: "",
                // },
                // {
                //   text: "项目规范/版本规范",
                //   link: "",
                // },

                // {
                //   text: "代码管理规范",
                //   link: "",
                // },
                // {
                //   text: "发版规范",
                //   link: "",
                // },
                // {
                //   text: "架构设计规范",
                //   link: "",
                // },
              ]
            }
          ]
        }
      ],
      'project-introduction': [
        {
          items: [
            {
              text: 'B端项目',
              items: [
                {
                  text: 'vite+vue3+管理后台',
                  link: '/project-introduction/b/vite+vue3+back'
                }
              ]
            },
            {
              text: 'C端项目',
              items: [
                {
                  text: 'vite+vue3+官网',
                  link: '/project-introduction/c/vite+vue3+front'
                }
              ]
            },
            {
              text: '服务',
              items: [
                {
                  text: 'node服务',
                  link: '/project-introduction/server/node-server'
                },
                {
                  text: 'koa服务',
                  link: '/project-introduction/server/koa-server'
                },
                {
                  text: 'nest服务',
                  link: '/project-introduction/server/nest-server'
                }
              ]
            }
          ]
        }

        // {
        //   items: [
        //     {
        //       text: 'B端项目',
        //       items: [
        //         {
        //           text: '介绍',
        //           link: '/project-introduction/b/introduce'
        //         },
        //         {
        //           text: '生产管理',
        //           link: '/project-introduction/b/gggj_production_management'
        //         }
        //       ]
        //     },
        //     {
        //       text: 'C端项目',
        //       link: '/project-introduction/c/introduce',
        //       items: [
        //         {
        //           text: '介绍',
        //           link: '/project-introduction/c/introduce'
        //         },
        //         {
        //           text: '钢构商城',
        //           link: '/project-introduction/c/siip-steel-mall'
        //         }
        //       ]
        //     }
        //   ]
        // }
      ],
      ui: [
        {
          items: [
            {
              text: 'hb-ui',
              link: '/ui/hb-ui/index'
            },
            {
              text: 'hb-ui-plus',
              link: '/ui/hb-ui-plus/index'
            }
          ]
        }
      ],
      'special-subject': [
        {
          items: [
            {
              text: 'vite打包优化专题',
              link: '/special-subject/vite-optimization/index'
            },
            {
              text: 'vue性能优化专题              ',
              link: '/special-subject/vue-optimization/index'
            }
          ]
        }
      ],
      tools: [
        {
          text: '首页',
          link: '/tools/index',
          activeMatch: '/tools/'
        },
        {
          text: 'hb-cli',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开
          items: [
            {
              text: '介绍',
              link: '/tools/hb-cli/introduce'
            },
            {
              text: '初始编码环境',
              link: '/tools/hb-cli/init-encode-env'
            },
            {
              text: '创建标准项目',
              link: '/tools/hb-cli/create-project'
            },
            {
              text: '创建标准模块',
              link: '/tools/hb-cli/add-module'
            },
            {
              text: '初始mock服务',
              link: '/tools/hb-cli/init-mock'
            }
          ]
        },
        {
          text: 'hb-utils',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开
          items: [
            {
              text: '介绍',
              link: '/tools/hb-utils/introduce'
            },
            {
              text: '数组',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'treeToArray',
                  link: '/tools/hb-utils/base/array/treeToArray'
                },
                {
                  text: 'group',
                  link: '/tools/hb-utils/base/array/group'
                },
                {
                  text: 'saveOptionsArr',
                  link: '/tools/hb-utils/base/array/saveOptionsArr'
                },
                {
                  text: 'arrToSelectArr',
                  link: '/tools/hb-utils/base/array/arrToSelectArr'
                },
                {
                  text: 'arrayIntersection',
                  link: '/tools/hb-utils/base/array/arrayIntersection'
                },
                {
                  text: 'arrayExcept',
                  link: '/tools/hb-utils/base/array/arrayExcept'
                }
              ]
            },
            {
              text: '时间',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'time',
                  link: '/tools/hb-utils/base/date/time'
                },
                {
                  text: 'timeFormat',
                  link: '/tools/hb-utils/base/date/timeFormat'
                },
                {
                  text: 'shortTime',
                  link: '/tools/hb-utils/base/date/shortTime'
                },
                {
                  text: 'exactDate',
                  link: '/tools/hb-utils/base/date/exactDate'
                },
                {
                  text: 'monthTime',
                  link: '/tools/hb-utils/base/date/monthTime'
                },
                {
                  text: 'monthDayTime',
                  link: '/tools/hb-utils/base/date/monthDayTime'
                },
                {
                  text: 'yearTime',
                  link: '/tools/hb-utils/base/date/yearTime'
                },
                {
                  text: 'getMonth',
                  link: '/tools/hb-utils/base/date/getMonth'
                },
                {
                  text: 'dateDiff',
                  link: '/tools/hb-utils/base/date/dateDiff'
                },
                {
                  text: 'addDate',
                  link: '/tools/hb-utils/base/date/addDate'
                },
                {
                  text: 'subDate',
                  link: '/tools/hb-utils/base/date/subDate'
                },
                {
                  text: 'showFormatTime',
                  link: '/tools/hb-utils/base/date/showFormatTime'
                },
                {
                  text: 'computeDate',
                  link: '/tools/hb-utils/base/date/computeDate'
                },
                {
                  text: 'dayDif',
                  link: '/tools/hb-utils/base/date/dayDif'
                }
              ]
            },
            {
              text: '数学',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'randomNum',
                  link: '/tools/hb-utils/base/math/randomNum'
                }
              ]
            },
            {
              text: '金钱',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'numberToCurrencyNo',
                  link: '/tools/hb-utils/base/money/numberToCurrencyNo'
                },
                {
                  text: 'amountFormat',
                  link: '/tools/hb-utils/base/money/amountFormat'
                },
                {
                  text: 'numberToChinese',
                  link: '/tools/hb-utils/base/money/numberToChinese'
                }
              ]
            },
            {
              text: '对象',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'deepClone',
                  link: '/tools/hb-utils/base/object/deepClone'
                },
                {
                  text: 'hasOwnProperties',
                  link: '/tools/hb-utils/base/object/hasOwnProperties'
                }
              ]
            },
            {
              text: '字符串',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'hideMobile',
                  link: '/tools/hb-utils/base/string/hideMobile'
                },
                {
                  text: 'hideIdCard',
                  link: '/tools/hb-utils/base/string/hideIdCard'
                }
              ]
            },
            {
              text: '函数',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'isObjectUnEmpty',
                  link: '/tools/hb-utils/functions/deal-empty/isObjectUnEmpty'
                },
                {
                  text: 'emptyFormatter',
                  link: '/tools/hb-utils/functions/deal-empty/emptyFormatter'
                },
                {
                  text: 'textEmpty',
                  link: '/tools/hb-utils/functions/deal-empty/textEmpty'
                },
                {
                  text: 'numFormatter',
                  link: '/tools/hb-utils/functions/deal-empty/numFormatter'
                },
                {
                  text: 'nonemptyFilter',
                  link: '/tools/hb-utils/functions/deal-empty/nonemptyFilter'
                },

                {
                  text: 'doubleDigit',
                  link: '/tools/hb-utils/functions/deal-serial-no/doubleDigit'
                },
                {
                  text: 'indexMethod',
                  link: '/tools/hb-utils/functions/deal-serial-no/indexMethod'
                },
                {
                  text: 'indexFormatter',
                  link: '/tools/hb-utils/functions/deal-serial-no/indexFormatter'
                },
                {
                  text: 'bounce',
                  link: '/tools/hb-utils/functions/debounce/bounce'
                },
                {
                  text: 'throttle',
                  link: '/tools/hb-utils/functions/throttle/throttle'
                },
                {
                  text: 'downloadByATag',
                  link: '/tools/hb-utils/functions/download/downloadByATag'
                },
                {
                  text: 'validateMobile',
                  link: '/tools/hb-utils/functions/validate/validateMobile'
                },
                {
                  text: 'validateEmail',
                  link: '/tools/hb-utils/functions/validate/validateEmail'
                },
                {
                  text: 'idCardValidity',
                  link: '/tools/hb-utils/functions/validate/idCardValidity'
                }
              ]
            }
          ]
        },
        {
          text: 'hb-services',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开

          items: [
            {
              text: '介绍',
              link: '/tools/hb-services/introduce'
            },
            {
              text: 'axios原生',
              link: '/tools/hb-services/http'
            },
            {
              text: 'axios二次封装',
              link: '/tools/hb-services/ajax'
            }
          ]
        },
        {
          text: 'hb-hooks',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开

          items: [
            {
              text: '介绍',
              link: '/tools/hb-hooks/introduce'
            },
            {
              text: 'State',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'useBoolean',
                  link: '/tools/hb-hooks/useBoolean'
                },
                {
                  text: 'useDebounce',
                  link: '/tools/hb-hooks/useDebounce'
                },
                {
                  text: 'useThrottle',
                  link: '/tools/hb-hooks/useThrottle'
                },
                {
                  text: 'useToggle',
                  link: '/tools/hb-hooks/useToggle'
                }
              ]
            },
            {
              text: ' Effect',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'useDebounceFn',
                  link: '/tools/hb-hooks/useDebounceFn'
                },
                {
                  text: 'useThrottleFn',
                  link: '/tools/hb-hooks/useThrottleFn'
                }
              ]
            },
            {
              text: ' Scene',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'useCounter',
                  link: '/tools/hb-hooks/useCounter'
                },
                {
                  text: 'useVirtualList',
                  link: '/tools/hb-hooks/useVirtualList'
                }
              ]
            },
            {
              text: ' ElementDom',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: 'useFullscreen',
                  link: '/tools/hb-hooks/useFullscreen'
                },
                {
                  text: 'useSize',
                  link: '/tools/hb-hooks/useSize'
                },
                {
                  text: 'useWinResize',
                  link: '/tools/hb-hooks/useWinResize'
                }
              ]
            },
            {
              text: ' useRequest',
              collapsible: true, //是不是可以动态展开
              collapsed: true, //默认是不是展开
              items: [
                {
                  text: '基础用法',
                  link: '/tools/hb-hooks/useRequest-basic'
                },
                {
                  text: '防抖',
                  link: '/tools/hb-hooks/useRequest-debounce'
                },
                {
                  text: '节流',
                  link: '/tools/hb-hooks/useRequest-throttle'
                },
                {
                  text: '轮询',
                  link: '/tools/hb-hooks/useRequest-polling'
                },
                {
                  text: 'Ready',
                  link: '/tools/hb-hooks/useRequest-ready'
                },
                {
                  text: '依赖刷新',
                  link: '/tools/hb-hooks/useRequest-refreshDeps'
                },
                {
                  text: '错误重试',
                  link: '/tools/hb-hooks/useRequest-retryCount'
                },
                {
                  text: '缓存&SWR',
                  link: '/tools/hb-hooks/useRequest-cacheKey'
                },
                {
                  text: 'Loading Delay',
                  link: '/tools/hb-hooks/useRequest-loading'
                }
              ]
            }
          ]
        }
      ]
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/aiai0603' }] //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
  }
};
