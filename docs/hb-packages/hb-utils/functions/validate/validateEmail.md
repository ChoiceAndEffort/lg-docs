---
title: validateEmail 验证邮箱
lang: zh-CN
---
# validateEmail 验证邮箱

用于校验身份证号码是否正确的函数,该函数用于校验身份证号码，包括判断号码格式、身份证开头城市是否正确、校验位是否正确等。如果身份该函数用于校验邮箱地址格式是否正确。如果邮箱地址格式不正确，将会在回调函数中返回一个 Error 对象。

## 基本用法
`export const rules = {
  email: [
    {
      validator: validateEmail,
      trigger: 'blur'
    }
  ]
}
`

## 示例
```javascript
<template>
  <el-form :model="form" ref="form" :rules="rules">
    <el-form-item label="邮箱地址" prop="email">
      <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { validateEmail } from '@hb/hb-util';

export default {
  data() {
    return {
      form: {
        email: ''
      },
      rules: {
        email: [
          {
            validator: validateEmail,
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('表单校验通过');
        } else {
          console.log('表单校验不通过');
        }
      });
    }
  }
}
</script>

```

在上面的示例中，我们定义了一个表单，包含一个邮箱地址输入框和一个提交按钮。在 rules 中，我们使用 validateEmail 函数指定了邮箱地址输入框的校验规则。在 onSubmit 方法中，我们使用表单校验器进行校验，并根据校验结果给出相应的提示。


、



