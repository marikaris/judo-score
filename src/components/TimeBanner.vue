<template>
  <div class="row" :class="goldenScore ? 'bg-warning' : ''">
    <div class="col-3">
      <div class="btn-group-vertical pt-5" role="group" aria-label="Vertical button group">
        <button class="btn btn-primary text-start" @click="resetTime">
          <i class="bi bi-arrow-clockwise"></i> Reset timer
        </button>
        <button class="btn btn-primary text-start" @click="resetAll">
          <i class="bi bi-arrow-clockwise"></i> Reset all
        </button>
        <button
          class="btn text-start"
          :class="goldenScore ? 'btn-outline-dark' : 'btn-warning'"
          @click="runGoldenScore"
        >
          <i class="bi bi-trophy-fill"></i> Golden score
        </button>
      </div>
    </div>
    <div class="col">
      <MatchTimer ref="matchTimer" :maxTime="maximumTime" :isCountdown="isCountdown" />
    </div>
    <div class="col-2">
      <PinningTimer ref="pinTimer" />
    </div>
    <div class="col-1 d-flex align-items-center">
      <div
        v-show="!goldenScore"
        class="btn-group-vertical"
        role="group"
        aria-label="Vertical radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="vbtn-radio"
          id="vbtn-radio1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-light" for="vbtn-radio1">Player 1</label>
        <input
          type="radio"
          class="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-danger" for="vbtn-radio2">Player 2</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MatchTimer from '@/components/MatchTimer.vue'
import PinningTimer from '@/components/PinningTimer.vue'

export default defineComponent({
  name: 'TimeBanner',
  mounted() {
    let self = this

    window.addEventListener('keyup', function (e) {
      self.handleKeyPress(e as KeyboardEvent)
    })
  },
  props: {
    isCountdown: {
      type: Boolean,
      default: true
    },
    maxTime: {
      type: Number,
      required: true
    }
  },
  emits: ['resetAll', 'reset'],
  data() {
    return {
      goldenScore: false,
      maximumTime: this.maxTime
    }
  },
  methods: {
    handleKeyPress(e: KeyboardEvent) {
      if (e.code === 'Space') {
        ;(this.$refs as any).matchTimer.toggleRun()
      } else if (e.key === 'Shift') {
        ;(this.$refs as any).pinTimer.toggleRun()
      } else if (e.key == 'r') {
        this.resetAll()
      } else if (e.key == 't') {
        this.resetTime()
      } else if (e.key == 'g') {
        this.runGoldenScore()
      }
    },
    runGoldenScore() {
      this.goldenScore = !this.goldenScore
      if (this.goldenScore) {
        this.maximumTime = 60
      } else {
        this.maximumTime = this.maxTime
      }
      this.resetTime()
    },
    stopTimer() {
      ;(this.$refs as any).matchTimer.stop()
    },
    resetTime() {
      this.$emit('reset')
      ;(this.$refs.matchTimer as any).resetTime()
    },
    resetAll() {
      this.goldenScore = false
      this.maximumTime = this.maxTime
      ;(this.$refs.pinTimer as any).clearPrev()
      ;(this.$refs.pinTimer as any).resetTime()
      this.resetTime()
      this.$emit('resetAll')
    }
  },
  components: {
    MatchTimer,
    PinningTimer
  }
})
</script>
