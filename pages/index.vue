<script setup>

  definePageMeta({
    middleware: ['auth']
  })

</script>

<template>
  <div>
    <h1>hello from the arabia meet</h1>
    <button @click="logoutUser">logout</button>
  </div>
</template>


<style scoped>

</style>
