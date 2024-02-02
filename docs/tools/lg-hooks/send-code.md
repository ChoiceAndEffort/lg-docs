# 发送验证码

## 简介

用于项目登录时/修改密码时发送验证码倒计时

### hook 代码

```ts
//hooks
import { ref, computed, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus';
import { getCodeApi } from '@/api/account/index';

const countDownTotal = 60;

const useSendCode = () => {
  // 是否已经触发过
  const isTriggered = ref(false);
  // 合计时数
  const countDown = ref(0);
  // 定时器
  let timer: any;
  // 是否禁用
  const disabled = computed(() => countDown.value > 0);
  // 发送按钮的文案
  const sendBtnText = computed(() => {
    if (disabled.value) return `${countDown.value}s`;
    if (isTriggered.value) return '再次发送';
    return '发送验证码';
  });
  const send = async (mobile: string): Promise<void> => {
    if (disabled.value) return;
    if (mobile.length < 11) {
      ElMessage({
        message: '您输入的手机号不正确',
        type: 'warning'
      });
      return;
    }

    // console.log('sms send to mobile: ', mobile, type);

    await getCodeApi({ mobile: mobile });
    isTriggered.value = true;
    countDown.value = countDownTotal;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      countDown.value--;
      if (countDown.value === 0) clearInterval(timer);
    }, 1000);
  };
  onUnmounted(() => {
    clearInterval(timer);
    timer = null;
  });
  return {
    countDown, //倒计时间
    send, //发送调用方法
    disabled, //是否禁用按钮
    sendBtnText //按钮文字
  };
};

export default useSendCode;
```

### 使用代码

```ts
//使用

import useSendCode from 'url';
const {
  send: sendCode,
  disabled: disabledSendCode,
  sendBtnText
} = useSendCode();

const handleSendCode = async () => {
  await sendCode(mobile);
};
```
