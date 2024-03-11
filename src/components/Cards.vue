<!-- Card.vue -->
<template>
  <div class="card">
    <span>{{ content }}</span>
    <span class="remove-icon" @click="remove">❌</span>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    remove() {
      this.$emit('remove');
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  position: relative;
}

.remove-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>
