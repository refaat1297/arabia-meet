<script setup>

  import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
  const email = ref('')
  const password = ref('')
  const { $auth } = useNuxtApp()
  const router = useRouter()
  const provider = new GoogleAuthProvider()



  function signIn () {
    console.log('auth')
    signInWithEmailAndPassword($auth, email.value, password.value)
      .then(userCredential => {
        useCookie('AM_TOKEN').value = userCredential.user.accessToken
        router.push('/')
      })
      .catch(error => {
        console.log('error', error.code)
        console.log('error', error.message)
        alert(error.message)
      })
  }

  function loginWithGoogle () {
    signInWithPopup($auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        useCookie('AM_TOKEN').value = token
        router.push('/')
      })
      .catch(error => {
        console.log('error', error.code)
        console.log('error', error.message)
        alert(error.message)
      })
  }

</script>

<template>
  <div class="login-form overflow-y-scroll h-full grid grid-cols-1 grid-rows-1">
    <div>
      <LoginIconsPeopleChatting class="people-chatting" />
      <form @submit.prevent="signIn">

        <div class="form-input mb-4">
          <div class="icon">
            <LoginIconsUser />
          </div>
          <input type="text" autocomplete="false" placeholder="name@example.com" v-model="email" class="font-lato-regular">
        </div>

        <div class="form-input mb-4">
          <div class="icon">
            <LoginIconsLock />
          </div>
          <input type="password" autocomplete="false" v-model="password" placeholder="●●●●●●●" class="font-lato-regular">
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
