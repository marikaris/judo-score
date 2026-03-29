<template>
  <div class="container-fluid bg-primary-subtle">
    <TopBanner
      ref="topBanner"
      :bout="bout"
      :message="message"
      :mat="mat"
      :boutName="boutTxt"
      @openSettingsEvent="toggleSettings"
      @openHelpEvent="toggleHelp"
    />
    <BoardSettings ref="settings" v-show="settingsOpen" @saveSettings="saveSettings" />
    <HelpPage ref="help" v-show="helpOpen" />
    <div v-show="!settingsOpen && !helpOpen">
      <JudoPlayer
        @wins="stopTimeIfWin"
        @loses="processLoss('p1')"
        ref="p1"
        :name="player1"
        :player="1"
        class="bg-white"
        style="height: 35vh"
        :useYuko="useYuko"
        :maxShidos="maxShidos"
      >
        ></JudoPlayer
      >
      <JudoPlayer
        @wins="stopTimeIfWin"
        @loses="processLoss('p2')"
        ref="p2"
        :name="player2"
        :player="2"
        class="bg-danger"
        style="height: 35vh"
        :useYuko="useYuko"
        :maxShidos="maxShidos"
      ></JudoPlayer>
      <TimeBanner
        :key="maxTime"
        @reset="bout += 1"
        @resetAll="resetScore"
        :maxTime="maxTime"
        :isCountdown="isCountdown"
        :players="[player1, player2]"
        :isSettingsOpen="settingsOpen"
        ref="timeBanner"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBanner from '@/components/TopBanner.vue'
import JudoPlayer from '@/components/JudoPlayer.vue'
import TimeBanner from '@/components/TimeBanner.vue'
import BoardSettings from '@/components/BoardSettings.vue'
import HelpPage from '@/components/HelpPage.vue'

export default defineComponent({
  name: 'ScoreBoard',
  components: {
    TopBanner,
    JudoPlayer,
    TimeBanner,
    BoardSettings,
    HelpPage
  },
  mounted() {
    // Sync initial state from persisted settings (e.g., timer strategy) once refs are available.
    this.onSettingsChange()
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
      this.ipponStopsTime = (this.$refs as any).settings.ipponStopsTime
      this.isCountdown = (this.$refs as any).settings.countdown == 'down' ? true : false
      this.useYuko = (this.$refs as any).settings.yuko
      this.mat = (this.$refs as any).settings.mat
      this.maxShidos = (this.$refs as any).settings.maxShidos
    },
    processLoss(player: string) {
      if (player === 'p1') {
        ;(this.$refs as any).p2.triggerWin()
      } else {
        ;(this.$refs as any).p1.triggerWin()
      }
      this.stopTimeIfWin()
    },
    resetScore() {
      ;(this.$refs as any).p1.reset()
      ;(this.$refs as any).p2.reset()
    },
    saveSettings() {
      ;(this.$refs as any).topBanner.toggleSettings()
    },
    toggleHelp() {
      this.helpOpen = !this.helpOpen
    },
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen
      if (!this.settingsOpen) {
        ;(this.$refs as any).timeBanner.goldenScore = false
        ;(this.$refs as any).timeBanner.maximumTime = this.maxTime
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
    maxShidos: number
    settingsOpen: boolean
    helpOpen: boolean
    ipponStopsTime: boolean
    isCountdown: boolean
    useYuko: boolean
  } {
    return {
      mat: 'Mat 1',
      message: 'Yuseigachi Norg',
      bout: 1,
      boutTxt: 'Ronde',
      player1: 'Player 1',
      player2: 'Player 2',
      maxTime: 120,
      maxPinTime: 20,
      settingsOpen: false,
      helpOpen: false,
      ipponStopsTime: true,
      isCountdown: true,
      useYuko: true,
      maxShidos: 3
    }
  }
})
</script>
