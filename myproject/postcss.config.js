module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,   // 视窗宽度 设计稿宽度
      viewportHeight: 667,   // 视窗高度 设计稿高度(可不配置)
      unitPrecision: 5,     //指顶'px'转换视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',    //转换单位 建议vw
      selectorBlackList: ['ingore', 'tab-bar', 'tab-bar-item','el-button'], // 指定不需要转换的类
      minPixelValue: 1,    // 小于或等与'1px' 不转化
      mediaQuery: true,     // 允许媒体查询中转换`px`
      
      // exclude:/(node_module)/
    },
  }
}
