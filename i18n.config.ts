import zh from '@/language/zh-CN'
import en from '@/language/en-US'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'cn', // 区配不到的语言就用en
  messages: {
    zh,
    en,
  },
}))
