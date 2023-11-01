const fs = require('fs');

// 读取 JSON 文件
const jsonData = require('../json/610000_full.json');

// 将 JSON 数据写入 JavaScript 文件
fs.writeFileSync('D:\\echarts\\demo\\js\\js\\610000_full.js', `var jsonData = ${JSON.stringify(jsonData, null, 4)};`);