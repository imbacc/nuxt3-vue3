export const getUser = () => {
  return useAsyncData('getUser', () => {
    return $fetch('/api/user', {
      method: 'POST',
      body: { hello: 'world ' },
    })
  })
}
