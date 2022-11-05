<template>
  <div id="app">
    <div v-for="post in posts" :key="post.id">
      <p>ID: {{post.id}} </p><br>
      <p>Title: {{post.title}} </p><br>
      <p>Author: {{post.author}} </p><br>
    </div>
    <div v-for="comment in comments" :key="comment.id">
      <p>ID: {{comment.id}} </p><br>
      <p>Body: {{comment.body}} </p><br>
      <p>PostId: {{comment.postId}} </p><br>
    </div>
    <p>Name {{profile.name}}</p>
    <div>
      <input type="text" v-model="todoName" @keyup.enter="addTodo">
      <ul>
        <li v-for="todo, index in todos" :key="index"> {{todo}} </li>
      </ul>
    </div>
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
      posts: [],
      comments: [],
      profile: [],
      todos: [],
      todoName: ''
    }
  },
  async created () {
    try {
      const posts = await axios.get('http://localhost:3000/posts')
      const comments = await axios.get('http://localhost:3000/comments')
      const profile = await axios.get('http://localhost:3000/profile')
      const todos = await axios.get('http://localhost:3000/todos')
      this.posts = posts.data
      this.comments = comments.data
      this.profile = profile.data
      this.todos = todos.data
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async addTodo () {
      const res = await axios.post('http://localhost:3000/todos', { name: this.todoName })
      this.todos = [...this.todos, res.data]
      this.todoName = ''
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;

  text-align: center;

  color: #2c3e50;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
