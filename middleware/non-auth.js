export default defineNuxtRouteMiddleware(() => {

  if (!useCookie('AM_TOKEN').value) {
    return
  }

  return navigateTo('/')


})
