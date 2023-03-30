<script setup>
const users = [
  {
    id: 'dd',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd1',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd2',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd3',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd4',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd5',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd6',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd7',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd8',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd9',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  },
  {
    id: 'dd10',
    name: "Ahmed Refaat",
    username: 'refaat1297',
    avatar: 'https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg'
  }
]
</script>

<template>
  <div class="profile-page min-h-screen bg-am-100 text-white py-4">
    {{ $t('welcome') }}

    <div class="max-w-screen-lg px-6 md:px-12 xl:px-0 mx-auto">

      <ProfileInfo />

      <div class="friends">

        <div class="sm:flex sm:items-center sm:items-center sm:justify-between bg-am-200 py-2 px-3 rounded-xl my-5">
          <div class="text-sm mb-2 sm:mb-0">All Friends</div>

          <div class="flex flex-row-reverse gap-2 w-full sm:w-48 bg-am-100 py-1 px-3 rounded-full">
            <input type="text"
                   class="block w-full bg-inherit outline-none border-none
                          placeholder:text-sm placeholder:text-slate-500 text-sm peer"
                   placeholder="Search Friends..." />
            <IconsSearch class="w-[20px] self-center fill-slate-300/70 peer-focus:fill-am-blue-primary transition" />
          </div>
        </div>



        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5">
          <ProfileUser v-for="user in users" :key="user.id" :user="user" />
        </div>

      </div>
    </div>
  </div>
</template>
