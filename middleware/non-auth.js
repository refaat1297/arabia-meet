export default defineNuxtRouteMiddleware((to, from) => {
  console.log('non cookies', useCookie('AM_TOKEN').value)

  if (!useCookie('AM_TOKEN').value) {
    return
  }

  return navigateTo('/')


})
