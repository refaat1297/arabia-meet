<script setup>
  import {signOut} from "firebase/auth";
  const { $auth } = useNuxtApp()
  const router = useRouter();
  function logout () {
    console.log('logout')
    signOut($auth).then(() => {
      useCookie('AM_TOKEN').value = null
      router.push({ path: "/auth/login" });
    })
  }

  definePageMeta({
    middleware: ['auth']
  })

</script>

<template>
  <div>
    <h1>hello from the arabia meet</h1>
    <button @click="logout">logout</button>
  </div>
</template>


<style scoped>

</style>
