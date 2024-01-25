#  vue项目目录规范


## views 目录结构

```ts
├── views[所有页面]                                     
│   │── module-name[模块名称]                              
│   │   │── components[该模块的局部组件]                 
│   │   │   │── A组件               
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts            
│   │   │   │── B组件               
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts             
│   │   │   │── public-form[add和edit公用的组件]                 
│   │   │   │     │── index.vue                
│   │   │   │     └── constants.ts
│   │   │── major文件夹[模块的主页面]                                  
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts
│   │   │── add文件夹[模块的新增页面]                                          
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts
│   │   │── edit文件夹[模块的修改页面]                                     
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts          
│   │   │── detail文件夹[模块的详情页-未嵌套子页面]                                    
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts                   
│   │   │── detail-child-major文件夹[模块的详情页-嵌套子页面-主页面]                                    
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts          
│   │   │── detail-child-add文件夹[模块的详情页-嵌套子页面-新增页面]                                    
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts     
│   │   │── detail-child-edit文件夹[模块的详情页-嵌套子页面-修改页面]                                    
│   │   │   │     │── index.vue               
│   │   │   │     └── constants.ts     
│   │   └── constants.ts


```