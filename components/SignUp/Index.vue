<script setup>

// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// const { $auth } = useNuxtApp()
// const router = useRouter()



// function login () {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup($auth, provider)
//       .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//
//         console.log('token', token)
//         console.log('user', user)
//
//         useCookie('AM_TOKEN').value = token
//
//         router.push({ path: '/' })
//
//       })
// }
</script>

<template>
  <div class="login-page grid grid-cols-1 md:grid-cols-1 grid-rows-1 h-screen">
    <SignUpForm />
  </div>
</template>

<style></style>
