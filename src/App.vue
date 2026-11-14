<template>
  <main>
    <ScoreBoard />
  </main>
</template>

<script setup lang="ts">
import ScoreBoard from './components/ScoreBoard.vue'
</script>

<style>
body {
  line-height: 1 !important;
}

:root {
  --font-scale: 1;
}

.super-big {
  font-size: calc(7rem * var(--font-scale));
}
.big {
  font-size: calc(5rem * var(--font-scale));
}
</style>
