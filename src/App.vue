<template>
  <div id="app">
    <TaskList :tasks="tasks"></TaskList>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
export default {
  name: 'App',
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [
        {
          title: 'Make todo list',
          completed: true
        },
        {
          title: 'Go skydiving',
          completed: false
        }
      ]
    }
  }
}
</script>
