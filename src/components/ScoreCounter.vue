<template>
  <div class="col text-center">
    <div class="row">
      <div class="col">
        <h2>
          <button class="btn btn-sm" @click="substract()">
            <i class="bi bi-dash-lg"></i>
          </button>
          <span>{{ name }}</span>
          <button class="btn btn-sm" @click="add()">
            <i class="bi bi-plus-lg"></i>
          </button>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <h1
          class="super-big"
          :class="name === 'Shido' ? 'bg-warning text-danger border border-danger' : ''"
          @click="add()"
        >
          {{ count }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style :scoped>
h1.super-big {
  width: 40%;
}
</style>

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
