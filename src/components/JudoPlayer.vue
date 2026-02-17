<template>
  <div class="row align-items-center">
    <div class="col">
      <h1 class="align-middle">{{ name }}</h1>
    </div>
    <div class="col">
      <ScoreCounter ref="ippon" @add="processIppon" name="Ippon" />
    </div>
    <div class="col">
      <ScoreCounter ref="wazaari" @add="processWazaari" name="Waza-ari" />
    </div>
    <div class="col" v-if="useYuko">
      <ScoreCounter ref="yuko" @add="() => {}" name="Yuko" />
    </div>
    <div class="col">
      <ScoreCounter ref="shido" name="Shido" />
    </div>
  </div>
</template>

<script lang="ts">
import ScoreCounter from '@/components/ScoreCounter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JudoPlayer',
  components: {
    ScoreCounter
  },
  emits: ['wins'],
  methods: {
    handleKey(e: KeyboardEvent) {
      const key = e.key
      const isP1 = (this as any).player === 1
      const isP2 = (this as any).player === 2
      // Player 1 bindings
      if (isP1) {
        switch (key) {
          case 'a':
          case 'A':
            ;(this.$refs as any).ippon.add()
            return
          case 'z':
          case 'Z':
            ;(this.$refs as any).ippon.subtract()
            return
          case 's':
          case 'S':
            ;(this.$refs as any).wazaari.add()
            return
          case 'x':
          case 'X':
            ;(this.$refs as any).wazaari.subtract()
            return
          case 'd':
          case 'D':
            if ((this as any).useYuko) (this.$refs as any).yuko.add()
            return
          case 'c':
          case 'C':
            if ((this as any).useYuko) (this.$refs as any).yuko.subtract()
            return
        }
      }
      // Player 2 bindings
      if (isP2) {
        switch (key) {
          case 'l':
          case 'L':
            if ((this as any).useYuko) (this.$refs as any).yuko.add()
            return
          case '.':
            if ((this as any).useYuko) (this.$refs as any).yuko.subtract()
            return
          case 'k':
          case 'K':
            ;(this.$refs as any).wazaari.add()
            return
          case ',':
            ;(this.$refs as any).wazaari.subtract()
            return
          case 'j':
          case 'J':
            ;(this.$refs as any).ippon.add()
            return
          case 'm':
          case 'M':
            ;(this.$refs as any).ippon.subtract()
            return
        }
      }
    },
    processIppon(value: number) {
      if (value == 1) {
        this.$emit('wins')
      }
    },
    processWazaari(value: number) {
      if (value === 2) {
        ;(this.$refs as any).wazaari.reset()
        ;(this.$refs as any).ippon.add()
      }
    },
    reset() {
      ;(this.$refs as any).ippon.reset()
      ;(this.$refs as any).wazaari.reset()
      if (this.useYuko) {
        ;(this.$refs as any).yuko.reset()
      }
      ;(this.$refs as any).shido.reset()
    }
  },
  props: {
    name: String,
    player: {
      type: Number,
      default: 1
    },
    useYuko: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKey as any)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKey as any)
  }
})
</script>
