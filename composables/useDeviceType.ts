export const useDeviceType = () => {
  const UA = import.meta.dev ? navigator.userAgent : useRequestHeader('user-agent') as string
  return /Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile/i.test(UA) ? 'mobile' : 'pc'
}
