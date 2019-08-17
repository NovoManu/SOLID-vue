<template>
  <div>
    <Header listName="My new todo list" />
    <main>
      <TodoList :todos="todos" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Todo } from '@/types'
import { Api } from '@/api'
import Header from '@/components/Header.vue'
import TodoList from '@/components/TodoList.vue'

@Component({
  components: { Header, TodoList }
})
export default class Home extends Vue {
  todos: Todo[] = []
  async mounted() {
    this.todos = await this.fetchTodos()
  }
  async fetchTodos(): Promise<Todo[]> {
    const api = new Api('todos')
    return await api.fetch()
  }
}
</script>
<style lang="scss">
.container {
  padding: 1.5rem;
}
</style>
