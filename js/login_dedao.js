(function () {
    'use strict';

    // Your code here...
    const loginBtn = document.querySelector('div.login-btn');
    if (loginBtn !== null) {
        loginBtn.click();
        const phoneNumberInput = document.querySelector('input[name="phone-number"]');
        phoneNumberInput.value = '18079014431';
        const agreeCheckBox = document.querySelector('div.dd-checkBox');
        if (agreeCheckBox !== null) {
            agreeCheckBox.click();
        }
        const label_getValidCode = document.querySelector('label[for="auth-code"]');
        if (label_getValidCode !== null) {
            label_getValidCode.click();
        }
        const authCodeInput = document.querySelector('input[name="auth-code"]');
        authCodeInput.focus();

        console.log('load success');
    }
})();