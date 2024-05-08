<template>
  <div class="col text-center">
    <h3>
      <button class="btn btn-sm" @click="substract()">
        <i class="bi bi-dash-lg"></i>
      </button>
      <span>{{ name }}</span>
      <button class="btn btn-sm" @click="add()">
        <i class="bi bi-plus-lg"></i>
      </button>
    </h3>
    <h1 class="super-big" @click="add()">{{ count }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScoreCounter',
  emits: ['add'],
  props: {
    name: String
  },
  methods: {
    set(value: number) {
      this.count = value
    },
    add() {
      this.count += 1
      this.$emit('add', this.count)
    },
    substract() {
      if (this.count !== 0) {
        this.count -= 1
      }
    },
    reset() {
      this.count = 0
    }
  },
  data(): { count: number } {
    return {
      count: 0
    }
  }
})
</script>
