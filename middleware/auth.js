export default defineNuxtRouteMiddleware((to, from) => {
  console.log('cookies', useCookie('AM_TOKEN').value)

  if (useCookie('AM_TOKEN').value) {
    return
  }

  return navigateTo('/auth/login')


})
