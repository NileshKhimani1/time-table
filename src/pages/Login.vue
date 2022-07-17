<template>
  <div class="login">
    <h3>Pleas Login to use the application</h3>
    <button @click="login">Login With Google</button>
  </div>
</template>
<script>
import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  methods: {
    login() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((res) => {
          const cred = GoogleAuthProvider.credentialFromResult(res);
          const token = cred.accessToken;
          const user = res.user;
          this.$router.push(`/time-table/${user.uid}`);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  data() {
    return {};
  },
};
</script>
