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
    processIppon(value: number) {
      if (value == 1) {
        this.$emit('wins')
      }
    },
    processWazaari(value: number) {
      if (value === 2) {
        ;(this.$refs as any).wazaari.reset()
        this.$refs.ippon.add()
      }
    },
    reset() {
      ;(this.$refs as any).ippon.reset()
      ;(this.$refs as any).wazaari.reset()
      ;(this.$refs as any).shido.reset()
    }
  },
  props: {
    name: String
  }
})
</script>
