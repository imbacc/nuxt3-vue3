import dayjs from 'dayjs'
import Components from 'unplugin-vue-components/vite'
import packageJson from './package.json'

const env = import.meta.env
const title = env.VITE_GLOB_APP_TITLE
const description = env.VITE_GLOB_APP_DESCRIPTION
const image = env.VITE_GLOB_APP_IMAGE
const url = env.VITE_GLOB_APP_URL

const { dependencies, name, version } = packageJson
const __APP_INFO__ = {
  package: { dependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: `2024-01-01`,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: ['zh', 'en'], // 配置语种
    defaultLocale: 'zh', // 默认语种
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    // strategy: 'prefix_and_default', // 添加路由前缀的方式
    // locales: [{ code: 'en', file: 'en.json' }]
  },

  // 自动导入api
  imports: {
    autoImport: true,
    dirs: ['composables/**', 'api/**'],
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },
  // 自动导入组件
  components: {
    global: true,
    dirs: ['~/components'],
  },

  // useRuntimeConfig().baseURL
  runtimeConfig: {
    baseURL: '',
    // The private keys which are only available server-side
    // apiSecret: '123',
    // // Keys within public are also exposed client-side
    // public: {
    //   apiBase: '/api',
    // },
  },

  // 线上环境
  $production: {
    // 缓存路由规则
    routeRules: {
      // 主页在构建时预渲染
      '/': { prerender: true },
      // 产品页面按需生成，后台自动重新验证
      // '/products/**': { swr: 3600 },
      // 博客文章按需生成，直到下一次部署前持续有效
      // '/blog/**': { isr: true },
      // 管理仪表板仅在客户端渲染
      // '/admin/**': { ssr: false },
      // 在API路由上添加cors头
      // '/api/**': { cors: true },
      // 跳转旧的URL
      // '/old-page': { redirect: '/new-page' },
    },
  },
  // 开发环境
  $development: {
    // routeRules: {
    //   '/**': { isr: true },
    // },
  },

  // theme: '',
  // srcDir: 'src/',
  devtools: {
    enabled: false,
  },
  typescript: {
    typeCheck: true,
  },
  colorMode: {
    classSuffix: '',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  // alias: {
  //   '#': './types',
  // },

  vite: {
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: [
      Components({
        resolvers: [], // 全自动按需引入naive-ui组件
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/global.scss";',
        },
      },
    },
  },

  app: {
    // baseURL: '/prefix/',
    // cdnURL: 'https://mycdn.org/',
    head: {
      title,
      link: [
        // { rel: "stylesheet", href: "a.css" },
        // { rel: "preconnect", href: "https://xxxxx" },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: url },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'description', content: description },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: image },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: image },
        { name: 'robots', content: 'index,follow' },
        { name: 'googlebot', content: 'index,follow' },
      ],
      script: [
        { src: 'https://hm.baidu.com/hm.js', type: 'text/javascript', defer: true },
      ],
    },
  },
})
