<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br />
      <button @click="logout">ログアウト</button><br />
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      メール
      <input v-model="email" type="text" /><br />
      パスワード
      <input v-model="password" type="password" /><br />
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  },

  methods: {
    ...mapActions(['setUser']),

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
