<template>
  <div>
    <p>Shallow Ref Example</p>
    <p>Count: {{ count }}</p>
    <p>Object: {{ object }}</p>
    <p>reactiveValue: {{ reactiveValue }}</p>
    <button @click="increment">Increment</button>
    <button @click="updateObject">Update Object</button>
    <button @click="updateReactiveValue">Update updateReactiveValue</button>
  </div>
</template>

<script>
import {reactive, ref, shallowRef} from 'vue';

export default {
  setup() {
    // Regular ref
    const count = ref(0);

    const reactiveValue = reactive({name:"waseem"});

    // Shallow ref for an object
    const object = shallowRef({name: 'John', age: 30});

    // Function to increment count
    const increment = () => {
      count.value++;
    };
    const updateReactiveValue = () => {
      reactiveValue.name = "Usman";
    };

    // Function to update object
    const updateObject = () => {
      // Note: If you want to change nested properties of the object, use a regular ref or reactive instead
      object.value.name = 'Jane'; // This will not trigger reactivity
      object.value = {...object.value, name: 'Jane'}; // This will trigger reactivity
    };

    return {
      count,
      object,
      increment,
      updateObject,
      reactiveValue,
      updateReactiveValue
    };
  }
};
</script>
