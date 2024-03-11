<template>
  <div>
    <button @click="toggle">Toggle</button>

    <transition :duration="5000" name="fade out">
      <p v-if="show">This paragraph fades in and out.</p>
    </transition>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const show = ref(false);

const toggle = () => {
  show.value = !show.value;
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}
</style>
