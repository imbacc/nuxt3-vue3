<template>
  <div>
    <h1>首页 - {{ $t('welcome') }}</h1>
    <ul>
      <li>
        <NuxtLink to="/list">
          进入列表页
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/idtest/111">
          进入id页 /idtest/任意id
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users-aaa/111">
          进入区域内容-详情页 /users-任意字符/任意id
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/taowa/didi">
          试试套娃弟弟
        </NuxtLink>
      </li>
      <li>
        <NuxtLinkLocale to="/language/test">
          语言关联需要使用NuxtLinkLocale跳转
        </NuxtLinkLocale>
      </li>
    </ul>

    <hr>

    <div>
      <a href="javascript:void(0);" @click.prevent.stop="switchLangs('zh')">zh language</a>
      <br>
      <a href="javascript:void(0);" @click.prevent.stop="switchLangs('en')">en language</a>
    </div>

    <hr>

    <div>
      <h1> Counter: {{ counter || '-' }}</h1>
      <button @click="counter = null">
        reset
      </button>
      <button @click="counter--">
        -
      </button>
      <button @click="counter++">
        +
      </button>
    </div>

    <hr>

    <ClientOnly>
      仅在客户端触发渲染！
    </ClientOnly>
  </div>
</template>

<script setup>
const foo = useFoo()

const appConfig = useAppConfig()

async function testAsyncData() {
  const { data, pending, error, refresh } = await useAsyncData(
    'testAsyncData',
    () => $fetch('https://nuxt.com'),
  )
}

async function testFetch(params) {
  const param1 = ref('value1')
  const { data, pending, error, refresh } = await useFetch('https://nuxt.com', {
    query: { param1: param1.value, param2: 'value2' },
  })
}

const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)

// const router = useRouter();
// router.back();
// router.forward();
// router.go();
// router.push({ path: "/home" });
// router.replace({ hash: "#bio" });

// const locale = ref('zh')

const route = useRoute()
const { locale, locales, setLocale } = useI18n()

onMounted(() => {
  console.log('%c [ locale ]-94', 'font-size:14px; background:#41b883; color:#ffffff;', locale.value)
  console.log('%c [ locales ]-93', 'font-size:14px; background:#41b883; color:#ffffff;', [...locales.value])
  testAsyncData()
  testFetch()
})

function switchLangs(value) {
  setLocale(value)
}
</script>

<style lang="scss">
body {
  background-color: $bgColor;
  color: $theme;
}
</style>
