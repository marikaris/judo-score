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
        ref="p1"
        :name="player1"
        class="bg-white"
        style="height: 35vh"
        :useYuko="useYuko"
      ></JudoPlayer>
      <JudoPlayer
        @wins="stopTimeIfWin"
        ref="p2"
        :name="player2"
        class="bg-danger"
        style="height: 35vh"
        :useYuko="useYuko"
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
    },
    resetScore() {
      ;(this.$refs as any).p1.reset()
      ;(this.$refs as any).p2.reset()
    },
    saveSettings() {
      this.$refs.topBanner.toggleSettings()
    },
    toggleHelp() {
      this.helpOpen = !this.helpOpen
    },
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen
      if (!this.settingsOpen) {
        this.$refs.timeBanner.goldenScore = false
        this.$refs.timeBanner.maximumTime = this.maxTime
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
      useYuko: true
    }
  }
})
</script>
