// 全局配置信息

const env = import.meta.env

export default defineAppConfig({
  env: {
    BASE_URL: env.BASE_URL,
    ENV_MODE: env.MODE,
    VITE_GLOB_APP_TITLE: env.VITE_GLOB_APP_TITLE,
    VITE_GLOB_APP_DESCRIPTION: env.VITE_GLOB_APP_DESCRIPTION,
    VITE_GLOB_APP_IMAGE: env.VITE_GLOB_APP_IMAGE,
    VITE_GLOB_APP_URL: env.VITE_GLOB_APP_URL,
  },
})

// useAppConfig().aaa
