<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="title">ПОЛЬЗОВАТЕЛИ</h1>
      <div class="card">
        <span>ID: {{users[0].id}}</span><br>
        <span>firstName: {{users[0].firstName}}</span><br>
        <span>secondName: {{users[0].secondName}}</span><br>
        <span>age: {{users[0].age}}</span><br>
        <span>balance: {{users[0].balance}}</span><br>
        <span>birthday: {{users[0].birthday}}</span><br>
        <span>contactEmail: {{users[0].contactEmail}}</span><br>
        <span>gender: {{users[0].gender}}</span><br>
        <span>phoneNumber: {{users[0].phoneNumber}}</span><br>
      </div>
    </div>
    <div class="wrapper">
      <h1 class="title">Склады</h1>
      <div class="card">
        <span>ID: {{warehouses[0].id}}</span><br>
        <span>name: {{warehouses[0].name}}</span><br>
        <span>address: {{warehouses[0].address}}</span><br>
      </div></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      warehouses: [],
      users: []
    }
  },
  async created () {
    try {
      const warehouses = await axios.get('https://i-am-locb.github.io/jsonapi/warehouses.json')
      const users = await axios.get('https://i-am-locb.github.io/jsonapi/users.json')
      this.warehouses = warehouses.data
      this.users = users.data
    } catch (e) {
      console.error(e)
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  box-sizing: border-box;

  width: 100vw;

  color: #2c3e50;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.wrapper {
  display: flex;
  align-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 40vw;

  border: 1px solid black;
}

.title {
  width: 100%;

  text-align: center;
}

.card {
  width: 35%;
  margin-bottom: 20px;
  padding: 20px;

  border: 1px solid tomato;
}
</style>
