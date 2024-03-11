<template>
  <div>
    <div class="card-grid">
      <div v-for="(card, index) in shuffledCards" :key="card.id" class="card">
        <span>{{ card.content }}</span>
        <span class="remove-icon" @click="removeCard(index)">❌</span>
      </div>
    </div>
    <button @click="shuffleCards">Shuffle Cards</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cards = ref([
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  // Add more cards as needed
]);

const shuffledCards = computed(() => {
  return shuffle(cards.value);
});

function removeCard(index) {
  cards.value.splice(index, 1);
}

function shuffleCards() {
  cards.value = shuffle(cards.value);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

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
