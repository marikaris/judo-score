<template>
  <div class="col text-center">
    <div class="row">
      <div class="col super-big">
        <span :class="timeInSeconds > maxTime ? 'text-danger' : ''" @click="toggleAndFocus()">
          {{ timeInMinutes }}
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn"
          :class="running ? 'btn-danger' : 'btn-success'"
          @click="toggleRun()"
          ref="counterBtn"
        >
          <span v-if="running"><i class="bi bi-stop-fill"></i> Matte</span>
          <span v-else><i class="bi bi-play-fill"></i> Hajime</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { convertSecondsToMinutes, getTimer } from '@/utils/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MatchTimer',
  props: {
    maxTime: {
      type: Number,
      default: 120
    }
  },
  methods: {
    resetTime() {
      this.timeInSeconds = 0
    },
    toggleAndFocus() {
      ;(this.$refs as any).counterBtn.focus()
      this.toggleRun()
    },
    toggleRun() {
      if (this.running) {
        this.stop()
      } else {
        this.run()
      }
    },
    run() {
      this.running = true
      this.timer = getTimer(() => this.timeInSeconds++)
    },
    stop() {
      this.running = false
      clearInterval(this.timer)
    }
  },
  computed: {
    timeInMinutes(): string {
      return convertSecondsToMinutes(this.timeInSeconds)
    }
  },
  data(): { timeInSeconds: number; running: boolean; timer: any } {
    return {
      timeInSeconds: 0,
      running: false,
      timer: null
    }
  }
})
</script>
