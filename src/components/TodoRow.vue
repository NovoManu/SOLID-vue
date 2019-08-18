<template functional>
  <div class="todo-list__row">
    <span>{{ props.id }}: </span>
    <span :class="{ 'todo-list__row--completed': props.completed }">{{
      props.title
    }}</span>
  </div>
</template>
<style lang="scss">
.todo-list {
  &__row {
    width: 100%;
    text-align: left;
    color: #4169e1;

    &--completed {
      text-decoration: line-through;
      color: #2e8b57;
    }
  }
}
</style>
