---
title: validateMobile 验证手机号码
lang: zh-CN
---
# validateMobile 验证手机号码

该函数用于校验手机号码格式是否正确。如果手机号码格式不正确，将会在回调函数中返回一个 Error 对象。
## 基本用法
`export const rules = {
  email: [
    {
      validator: validateMobile,
      trigger: 'blur'
    }
  ]
}
`

## 示例
```javascript
<template>
  <el-form :model="form" ref="form" :rules="rules">
    <el-form-item label="手机号码" prop="mobile">
      <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { validateMobile } from '@hb/hb-util';

export default {
  data() {
    return {
      form: {
        mobile: ''
      },
      rules: {
        mobile: [
          {
            validator: validateMobile,
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

在上面的示例中，我们定义了一个表单，包含一个手机号码输入框和一个提交按钮。在 rules 中，我们使用 validateMobile 函数指定了手机号码输入框的校验规则。在 onSubmit 方法中，我们使用表单校验器进行校验，并根据校验结果给出相应的提示。


