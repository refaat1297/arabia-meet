<script setup>

  const { locale } = useI18n()



  definePageMeta({
    middleware: ['auth']
  })

</script>

<template>
  <div>


    <div>
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="ar">ar</option>
        </select>
        <p>{{ $t('welcome') }}</p>
      </form>
    </div>


<!--    <h1>{{ locale('welcome') }}</h1>-->
    <h1>hello from the arabia meet</h1>
    <button @click="logoutUser">logout</button>
  </div>
</template>


<style scoped>

</style>
