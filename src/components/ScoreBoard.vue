<template>
  <div class="container-fluid bg-primary-subtle">
    <TopBanner
      :bout="bout"
      :message="message"
      :mat="mat"
      :boutName="boutTxt"
      @openSettingsEvent="toggleSettings"
    />
    <BoardSettings ref="settings" v-show="settingsOpen" @saveSettings="onSettingsChange" />
    <div v-show="!settingsOpen">
      <JudoPlayer @wins="stopTimeIfWin" ref="p1" :name="player1" class="bg-white"></JudoPlayer>
      <JudoPlayer @wins="stopTimeIfWin" ref="p2" :name="player2" class="bg-danger"></JudoPlayer>
      <TimeBanner @reset="bout += 1" @resetAll="resetScore" :maxTime="maxTime" ref="timeBanner" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBanner from '@/components/TopBanner.vue'
import JudoPlayer from '@/components/JudoPlayer.vue'
import TimeBanner from '@/components/TimeBanner.vue'
import BoardSettings from '@/components/BoardSettings.vue'

export default defineComponent({
  name: 'ScoreBoard',
  components: {
    TopBanner,
    JudoPlayer,
    TimeBanner,
    BoardSettings
  },
  methods: {
    stopTimeIfWin() {
      if (this.ipponStopsTime) {
        ;(this.$refs as any).timeBanner.stopTimer()
      }
    },
    onSettingsChange() {
      this.message = (this.$refs as any).settings.msg
      this.boutTxt = (this.$refs as any).settings.boutTxt
      this.player1 = (this.$refs as any).settings.p1
      this.player2 = (this.$refs as any).settings.p2
      this.maxTime = (this.$refs as any).settings.maxMatchTime
      this.maxPinTime = (this.$refs as any).settings.maxPinTime
    },
    resetScore() {
      ;(this.$refs as any).p1.reset()
      ;(this.$refs as any).p2.reset()
    },
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen
      if (!this.settingsOpen) {
        this.onSettingsChange()
      }
    }
  },
  data(): {
    message: string
    mat: string
    bout: number
    boutTxt: string
    player1: string
    player2: string
    maxTime: number
    maxPinTime: number
    settingsOpen: boolean
    ipponStopsTime: boolean
  } {
    return {
      mat: 'Mat 1',
      message: 'Yuseigachi Norg',
      bout: 0,
      boutTxt: 'Ronde',
      player1: 'Player 1',
      player2: 'Player 2',
      maxTime: 120,
      maxPinTime: 20,
      settingsOpen: false,
      ipponStopsTime: true
    }
  }
})
</script>
