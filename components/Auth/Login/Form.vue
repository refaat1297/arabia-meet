<script setup>

  import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
  import {errorMessages} from './data'

  const email = ref('')
  const password = ref('')
  const { $auth } = useNuxtApp()
  const router = useRouter()
  const provider = new GoogleAuthProvider()
  const errorMessage = ref('')


  function signIn () {
    if (!email.value || !password.value) {
      errorMessage.value = errorMessages['auth/fill-inputs']
      return
    }

    if (!isValidEmail(email.value)) {
      errorMessage.value = errorMessages['auth/invalid-email']
      return
    }

    signInWithEmailAndPassword($auth, email.value, password.value)
      .then(userCredential => {
        useCookie('AM_TOKEN').value = userCredential.user.accessToken
        router.push('/')
      })
      .catch(error => {
        errorMessage.value = errorMessages[error.code]
      })
  }

  function loginWithGoogle () {
    signInWithPopup($auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        useCookie('AM_TOKEN').value = credential.accessToken
        router.push('/')
      })
      .catch(error => {
        errorMessage.value = errorMessages[error.code]
      })
  }

</script>

<template>
  <div class="login-form overflow-y-scroll h-full grid grid-cols-1 grid-rows-1">
    <div>
      <AuthLoginIconsPeopleChatting class="people-chatting" />

      <form @submit.prevent="signIn">

        <p v-if="errorMessage" class="text-red-500 mb-2">{{ errorMessage }}</p>

        <div class="form-input mb-4">
          <div class="icon">
            <AuthLoginIconsUser />
          </div>
          <input type="text" autocomplete="false" placeholder="name@example.com" v-model="email" class="font-lato-regular placeholder:text-slate-500">
        </div>


        <div class="form-input mb-4">
          <div class="icon">
            <AuthLoginIconsLock />
          </div>
          <input type="password" autocomplete="false" v-model="password" placeholder="●●●●●●●" class="font-lato-regular placeholder:text-slate-500">
        </div>

        <button type="submit" class="mb-4">Sign In</button>
      </form>

      <p class="mb-4 font-lato-regular text-white text-center">Or</p>
      <button class="mb-4" @click="loginWithGoogle">Sign In with google</button>

      <NuxtLink to="/auth/forget-password" class="no-underline	font-lato-regular">Forget Password?</NuxtLink>
      <NuxtLink to="/auth/sign-up" class="no-underline	font-lato-regular">Don't have an account? Sign Up</NuxtLink>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.login-form {
  background-color: #2f3b50;
  display: grid;
  place-items: center;

  .people-chatting {
    width: 250px;
    height: 250px;
    margin: auto;

    @media (max-width: 767px) {
      width: 250px;
      height: 230px;
    }
  }


  form {
    display: block;
    width: 300px;
    .form-input {
      display: grid;
      grid-template-columns: 30px 1fr;
      align-items: center;
      background-color: #283143;
      padding: 8px 5px;
      border-radius: 8px;
      gap: 5px;

      input {
        background-color: inherit;
        border: none;
        outline: none;
        caret-color: #cecece;
        color: #fff;
        font-size: 14px;
        vertical-align:middle;
      }


      .icon {
        width: 30px;
        height: auto;
        display: grid;
        place-items: center;
        svg {
          fill: #cecece;
          width: 20px;
          height: 20px;
        }
      }
    }

  }

  button {
    width: 100%;
    background-color: #3d70b2;
    color: #fff;
    height: 36px;
    border-radius: 30px;
  }

  a {
    color: #cecece;
    text-align: center;
    display: block;
  }


}
</style>
