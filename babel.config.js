module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    // "transform-vue-jsx",
    // "transform-runtime",
    ["component", 
      {
        "libraryName":"mint-ui",
        "style":true
      }
      
    ]
  ]
}
// 框架的配置
