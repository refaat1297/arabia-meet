<script setup>
  definePageMeta({
    middleware: ['non-auth']
  })
</script>

<template>
  <Head>
    <Title>Arabia Meet - Login</Title>
  </Head>
  <LazyAuthLogin />
</template>

<style lang="scss"></style>
