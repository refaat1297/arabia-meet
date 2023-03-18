<script setup>

  const props = defineProps({
    user: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <div class="group bg-am-200 py-9 px-3 flex flex-col justify-center items-center rounded select-none">
    <div class="img-block relative w-{80} h-{80} p-2 border rounded-full border-transparent transition">
      <div class="
          bg-red-500 rounded-full bg-transparent absolute bottom-0 right-0
          w-full h-full border border-1 border-white/40 scale-0
          group-hover:scale-100 transition" />

      <img
          :src="user.avatar"
          width="80" height="80" class="rounded-full" alt="">

      <div class="
          border border-4 border-am-200 absolute bottom-0 right-0
          transition bg-am-blue-primary grid place-items-center w-9 h-9
          rounded-full cursor-pointer scale-0 group-hover:scale-100">
        <IconsChat/>
      </div>

    </div>

    <div class="text-center mt-3 text-ellipsis leading-tight">
      <p>{{ user.name }}</p>
      <span class="text-xs text-slate-400">@{{ user.username }}</span>
    </div>
  </div>
</template>
