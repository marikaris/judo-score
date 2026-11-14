<template>
  <main class="app-wrapper">
    <div 
      class="kiosk-container" 
      :style="{ 
        width: `${baseWidth}px`, 
        height: `${baseHeight}px`, 
        transform: `scale(${kioskScale})` 
      }"
    >
      <ScoreBoard />
    </div>
  </main>
</template>

<script setup lang="ts">
import ScoreBoard from './components/ScoreBoard.vue'
import { useKioskScaling } from './composables/useKioskScaling'
import './assets/css/kiosk.css' // Import the global styles

// Initialize the composable
const { kioskScale, baseWidth, baseHeight } = useKioskScaling(1920, 1080)
</script>
