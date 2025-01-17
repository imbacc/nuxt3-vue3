import type { userStore_DTYPE } from '@/types/store/user'

import { getCacheLoca } from 'imba-cache'

export const useUserStore = defineStore('user', {
  state: (): userStore_DTYPE => {
    return {
      token: getCacheLoca('token') || '',
      userInfo: getCacheLoca('userInfo') || {},
    }
  },
  getters: {
    hasLogin(state): boolean {
      return Boolean(state.token && state.userInfo)
    },
  },
  actions: {
    setStoreCache(params: Partial<key_valueof_CONVERT<userStore_DTYPE>>) {
      useSetStoreCache(this, params)
    },
    clear() {
      useClearStore(this)
    },
    loginOut() {
      this.clear()
      window.location.replace('/login')
    },
  },
})
