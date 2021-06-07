<template>
    <div class="contenido">
      <div>
      <button v-if="!authenticated" @click="abrirSesion">Login</button>
      </div>
      <div v-if="authenticated">
        <button @click="cerrarsesion">Logout</button>
        <h1>Hola Sr.{{ firstName }}</h1>
      </div>
        <card v-for="game in juegos" v-bind:juego="game" v-bind:key="game.id"/>


    </div>
</template>
<script>
import { db } from '../db'
import firebase from '../db'
import card from './card.vue'

export default {
  name: 'contenido',
  props: [],
  mounted: function() {
      firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
},
  data() {
    return {
      juegos: [],
      user:{
        loggedIn:false,
          data: {}
      }
    }
  },

  components:{
      card
  },

  firestore: {
    juegos: db.collection('Games'),
  },
  methods:{
    abrirSesion(){
    firebase.login();
    },
    cerrarsesion(){
      firebase.logout()
    }
  },
  computed: {
    authenticated(){
      return this.user.loggedIn
    },
    firstName(){
      if (this.user.data.displayName) {
        return this.user.data.displayName
      }
      return null
    }
  }
}
</script>

<style scoped>
.contenido{
    display: flex;
}
</style>