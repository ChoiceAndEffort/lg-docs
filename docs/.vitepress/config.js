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
    // footer: {
    //   message: '其实我也不知道写啥注脚',
    //   copyright: '那我就随便写个吧'
    // },

    nav: [
      //右上角的导航栏
      {
        text: '工具',
        link: '/development-tool/nvm-use/index',
        activeMatch: '/development-tool/'
      },
      {
        text: '规范',
        link: '/standard/name/name-type',
        activeMatch: '/standard/'
      },
      {
        text: '项目介绍',
        link: '/project-introduction/b/vite+vue3+back',
        activeMatch: '/project-introduction/'
      },
      { text: '工具包', link: '/tools/index', activeMatch: '/tools/' },
      { text: '组件', link: '/ui/hb-ui-plus/index', activeMatch: '/ui/' },
      {
        text: '专题',
        link: '/special-subject/vite-optimization/index',
        activeMatch: '/special-subject/'
      },
      {
        text: "关于",
        link: "/about/",
        activeMatch: "/about/",
      },
      {
        text: '资源',
        link: '/resources/index',
        activeMatch: '/resources/'
      }
    ],
    sidebar: {
      '/development-tool/': [
        {
          items: [
            {
              text: 'node工具',
              items: [
                {
                  text: 'nvm使用',
                  link: '/development-tool/nvm-use/index'
                },
                {
                  text: 'nrm使用',
                  link: '/development-tool/nrm-use/index'
                },
                {
                  text: 'rimraf使用',
                  link: '/development-tool/rimraf-use/index'
                },
                {
                  text: 'pm2使用',
                  link: '/development-tool/pm2/index'
                },
                {
                  text: 'pnpm使用',
                  link: '/development-tool/pnpm/index'
                }
              ]
            },
            {
              text: '服务工具',
              items: [
                {
                  text: 'anywhere启动服务',
                  link: '/development-tool/anywhere-use/index'
                }
              ]
            }
          ]
        }
      ],
      standard: [
        {
          items: [
            {
              text: '命名',
              items: [
                {
                  text: '命名类型',
                  link: '/standard/name/name-type'
                },
                {
                  text: '项目命名',
                  link: '/standard/name/project-name'
                },
                {
                  text: '文件命名',
                  link: '/standard/name/file-name'
                }
              ]
            },
            {
              text: 'css规范',
              items: [
                {
                  text: 'CSS规范',
                  link: '/standard/css/index'
                }
              ]
            },
            {
              text: '分支管理',
              items: [
                {
                  text: 'git分支管理',
                  link: '/standard/branch-management/index'
                }
              ]
            },
            {
              text: '提交规范',
              items: [
                {
                  text: 'git提交规范',
                  link: '/standard/git-submit/index'
                }
              ]
            },
            {
              text: 'eslint检查',
              items: [
                {
                  text: 'eslint规范',
                  link: '/standard/eslint/index'
                }
              ]
            },
            {
              text: '目录结构规范',
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
                },
                {
                  text: 'webpack5+vue2+管理后台',
                  link: '/project-introduction/b/webpack+vue2+back'
                }
              ]
            },
            {
              text: 'C端项目',
              items: [
                {
                  text: '宇晨官网',
                  link: '/project-introduction/c/yu-chen'
                },
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
      ],
      ui: [
        {
          items: [
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
              text: '打包',
              items: [
                {
                  text: 'vite打包优化专题',
                  link: '/special-subject/vite-optimization/index'
                }
              ]
            },
            {
              text: '性能优化',
              items: [
                {
                  text: 'vue性能优化专题              ',
                  link: '/special-subject/vue-optimization/index'
                }
              ]
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
          text: 'lg-cli',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开
          items: [
            {
              text: '介绍',
              link: '/tools/lg-cli/introduce'
            }
          ]
        },
        {
          text: 'lg-utils',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开
          items: [
            {
              text: '介绍',
              link: '/tools/lg-utils/introduce'
            }
          ]
        },
        {
          text: 'lg-services',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开

          items: [
            {
              text: '介绍',
              link: '/tools/lg-services/introduce'
            }
          ]
        },
        {
          text: 'lg-hooks',
          collapsible: false, //是不是可以动态展开
          collapsed: false, //默认是不是展开

          items: [
            {
              text: '介绍',
              link: '/tools/lg-hooks/introduce'
            },
            {
              text: 'send-code',
              link: '/tools/lg-hooks/send-code'
            },
            {
              text: 'use-route-router',
              link: '/tools/lg-hooks/use-route-router'
            }
          ]
        }
      ]
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/aiai0603' }] //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
  }
};
