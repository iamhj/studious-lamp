/* 脚本：实现得到页面自动输入手机号、获取验证码，避免频繁输入 */
(function () {
    'use strict';

    // Your code here...
    document.querySelector('div.login-btn').click();
    setTimeout(() => {
        // code to execute after 2 seconds
        document.querySelector('div.dd-checkBox').click();
        const phoneNumberInput = document.querySelector('input[name="phone-number"]');
        if (phoneNumberInput !== null) {
            phoneNumberInput.value = '【手机号】';
            var event = document.createEvent('HTMLEvents');
            event.initEvent("input", true, true);
            event.eventType = 'message';
            phoneNumberInput.dispatchEvent(event);
        }
        document.querySelector('label[for="auth-code"]').click();
        document.querySelector('input[name="auth-code"]').focus();
        console.log('load complete');
    }, 500);
})();