<script setup>
const users = [
  {
    id: 'dd',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd1',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd2',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd3',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd4',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd5',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd6',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd7',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd8',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd9',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  },
  {
    id: 'dd10',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/milly.jpg'
  }
]
</script>

<template>
  <div class="profile-page min-h-screen bg-am-100 text-white py-4">
    <div class="max-w-screen-lg px-6 md:px-12 xl:px-0 mx-auto">

      <ProfileInfo />

      <div class="friends">

        <div class="grid grid-cols-1 sm:grid-cols-2 bg-am-200 py-3 px-4 rounded-xl my-5">
          <div>All Friends</div>
          <div class="self-end">input</div>
        </div>



        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5">
          <ProfileUser v-for="user in users" :key="user.id" :user="user" />
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
