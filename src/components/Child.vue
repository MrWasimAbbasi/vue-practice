<!-- ChildComponent.vue -->
<template>
  <div>
    <h1>Wasim</h1>
    <slot :message="ok? 'Yes':'no'"></slot>
  </div>
</template>

<script setup>
defineProps({ok: Boolean})
</script>
