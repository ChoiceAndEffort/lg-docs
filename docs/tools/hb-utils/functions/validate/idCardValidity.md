---
title: idCardValidity 验证身份证号码
lang: zh-CN
---
# idCardValidity 验证身份证号码

用于校验身份证号码是否正确的函数,该函数用于校验身份证号码，包括判断号码格式、身份证开头城市是否正确、校验位是否正确等。如果身份证号码校验不通过，将会在回调函数中返回一个 Error 对象。

## 基本用法

`
export const rules = {
  idCard: [
    {
      validator: idCardValidity,
      trigger: 'blur'
    }
  ]
}`

## 示例
```javascript
<template>
  <el-form :model="form" ref="form" :rules="rules">
    <el-form-item label="身份证号" prop="idCard">
      <el-input v-model="form.idCard" placeholder="请输入身份证号码"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { idCardValidity } from '@hb/hb-util';

export default {
  data() {
    return {
      form: {
        idCard: ''
      },
      rules: {
        idCard: [
          {
            validator: idCardValidity,
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
在上面的示例中，我们定义了一个表单，包含一个身份证输入框和一个提交按钮。在 rules 中，我们使用 idCardValidity 函数指定了身份证输入框的校验规则。在 onSubmit 方法中，我们使用表单校验器进行校验，并根据校验结果给出相应的提示。





