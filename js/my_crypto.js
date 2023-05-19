// 引入CryptoJS库
const CryptoJS = require("crypto-js");

// 计算MD5哈希值
const hash = CryptoJS.MD5("your message").toString();

console.log(hash); // 输出计算的哈希值
