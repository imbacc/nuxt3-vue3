export const getTest = () => {
  return useAsyncData('getTest', () => {
    return $fetch('/api/getTest', {
      method: 'get',
    })
  })
}

export const getTest222 = (id: number) => {
  return useAsyncData('getTest', () => {
    return $fetch('/api/get_test/:id', {
      method: 'get',
    })
  })
}

export const getTest333 = (query = {}, body = {}) => {
  return useAsyncData('getTest', () => {
    return $fetch('/api/get_test/three', {
      method: 'get',
      body,
    })
  })
}
