export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre', // 或 'post'
  async setup(nuxtApp) {
    // 这相当于一个普通的功能性插件
  },
  hooks: {
    // 这里可以直接注册Nuxt应用运行时钩子
    'app:created': function () {
      console.log('my-plugin app:created')
      //
    },
  },
  env: {
    // 如果不希望插件在仅渲染服务器端或孤立组件时运行，请将此值设置为`false`。
    islands: true,
  },
})
