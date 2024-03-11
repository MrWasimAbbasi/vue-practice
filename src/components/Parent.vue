<!-- ParentComponent.vue -->
<template>
  <ChildComponent v-slot="{ message }">
    <p>{{ message }} displayed in parent...</p>
  </ChildComponent>
</template>

<script>
import ChildComponent from './Child.vue';

export default {
  data() {
    return {
      message: "Allah Hafiz!!"
    }
  },
  components: {
    ChildComponent
  }
};
</script>
