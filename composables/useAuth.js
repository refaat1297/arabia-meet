import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {signOut} from 'firebase/auth'



const generateUserName = ({ name, uid }) => {
  const mutatedName = name
    .split(' ')
    .map(el => el.toLowerCase())
    .join('-')
  const mutatedUID = uid.toLowerCase().slice(0, 4) + uid.slice(-1. -3)

  return `${mutatedName}-${mutatedUID}`
}

export const createUser = async (user) => {
  const { $db } = useNuxtApp()
  await setDoc(doc($db, 'Users', user.uid), {
    ...user,
    username: generateUserName({ name: user.name, uid: user.uid }),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
}

export const logoutUser = async () => {
  const { $auth } = useNuxtApp()
  signOut($auth).then(() => {
    useCookie('AM_TOKEN').value = null
    navigateTo({
      path: "/auth/login"
    })
  })
}

