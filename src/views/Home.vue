<template>
  <div>
    <Header listName="My new todo list" />
    <main>
      <TodoList>
        <TodoCard
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          class="todo-list__task"
        />
      </TodoList>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Todo } from '@/types'
import { Api } from '@/api/api'
import Header from '@/components/Header.vue'
import TodoList from '@/components/TodoList.vue'
import TodoCard from '@/components/TodoCard.vue'

@Component({
  components: { Header, TodoList, TodoCard }
})
export default class Home extends Vue {
  todos: Todo[] = []
  async mounted() {
    this.todos = await this.fetchTodos()
  }
  async fetchTodos(): Promise<Todo[]> {
    const api = new Api()
    return await api.fetch('todos')
  }
}
</script>
<style lang="scss">
.container {
  padding: 1.5rem;
}
</style>
