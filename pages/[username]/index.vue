<script setup>
const users = [
  {
    id: 'dd',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  }
]
</script>

<template>
  <div class="profile-page min-h-screen bg-am-100 text-white">
    <div class="max-w-screen-lg mx-auto">

      <div class="user-info">

        user info
      </div>





      <div class="friends">

        <div>all firends bar</div>

        <div class="grid grid-cols-4 gap-4">
          <ProfileUser v-for="user in users" :key="user.id" :user="user" />
        </div>

      </div>





    </div>
  </div>
</template>

<style lang="scss">

</style>
