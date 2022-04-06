<template id="task-item">
    <li class="tasks__item">
      <button :class="className"
          @click.self="$emit('complete')"
      >
        {{ task.title }}
      </button>
      <button class="tasks__item__remove button alert pull-right"
              @click="$emit('remove')"
      >
        <i class="fa fa-times"></i>
      </button>
    </li>
</template>

<script src="<https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js>"></script>
<script>
export default {
  name: 'task-item',
  props: ['task'],
  computed: {
    className() {
      let classes = ['tasks__item__toggle'];
      if (this.task.completed) {
        classes.push('tasks__item__toggle--completed');
      }
      return classes.join(' ');
    }
  }
}
</script>
