<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="big" :class="timeInSeconds > maxTime ? 'text-danger' : ''">
          {{ timeInSeconds }}
        </div>
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
          <span v-if="running"><i class="bi bi-stop-fill"></i> Toketa</span>
          <span v-else><i class="bi bi-play-fill"></i> Osaekomi</span>
        </button>
        <div class="fst-italic pt-2 row" v-if="prevPinnings.length !== 0">
          <div class="col-2">
            <button class="btn btn-sm btn-link">
              <i class="bi bi-arrow-clockwise" @click="clearPrev"></i>
            </button>
          </div>
          <div class="col">History:</div>
        </div>
        <div class="ps-5" v-for="pin in prevPinnings" :key="pin">{{ pin }} sec</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getTimer, prepend } from '@/utils/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PinningTimer',
  props: {
    maxTime: {
      type: Number,
      default: 20
    }
  },
  methods: {
    resetTime() {
      this.timeInSeconds = 0
    },
    clearPrev() {
      this.prevPinnings = []
    },
    toggleAndFocus() {
      ;(this.$refs as any).counterBtn.focus()
      this.toggleRun()
    },
    toggleRun() {
      if (this.running) {
        this.stop()
        this.prevPinnings = prepend(this.timeInSeconds, this.prevPinnings)
        this.resetTime()
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
  data(): { timeInSeconds: number; running: boolean; timer: any; prevPinnings: Array<number> } {
    return {
      timeInSeconds: 0,
      running: false,
      timer: null,
      prevPinnings: []
    }
  }
})
</script>
