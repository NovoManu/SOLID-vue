<template>
  <div class="todo-list__task">
    <span :class="{ 'todo-list__task--completed': todo.completed }">
      {{ todo.title }}
    </span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Todo } from '@/types'

@Component
export default class TodoCard extends Vue {
  @Prop({ required: true }) todo!: Todo
}
</script>
<style lang="scss" scoped>
.todo-list {
  &__task {
    width: 24%;
    padding: 1.5rem;
    margin: 0.5%;
    text-align: left;
    color: #4169e1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    &--completed {
      color: #2e8b57;
      text-decoration: line-through;
    }
  }
}
</style>
