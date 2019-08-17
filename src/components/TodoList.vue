<template functional>
  <div class="container">
    <div class="todo-list">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
