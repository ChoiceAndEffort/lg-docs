---
title: downloadByATag 下载链接资源
lang: zh-CN
---
# downloadByATag  下载链接资源

传入url，生成a标签将资源下载至本地。

## 基本用法
`
downloadByATag(url)
`

## 示例
```javascript
<button @click="handleDownloadByATag('https://pss.bdstatic.com/static/superman/img/logo/bd_logo1-66368c33f8.png')">下载图片</button>

handleDownloadByATag(url) {
            downloadByATag(url);
        },


```

## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| url |文件地址|String| 是  |-  | -|
