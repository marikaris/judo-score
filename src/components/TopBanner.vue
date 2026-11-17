<template>
  <div class="row">
    <div class="col">
      <h1>{{ mat }}</h1>
    </div>
    <div class="col">
      <h1>{{ message }}</h1>
    </div>
    <div class="col">
      <h1>{{ boutName }} {{ bout }}</h1>
    </div>
    <div class="col">
      <button class="btn btn-link float-end" @click="toggleHelp">
        <span v-if="helpOpen"><i class="bi bi-x-lg"></i> {{ $t('navigation.close') }}</span>
        <span v-else><i class="bi bi-question-diamond-fill"></i> {{ $t('navigation.help') }}</span>
      </button>
      <button class="btn btn-link float-end" @click="toggleSettings">
        <span v-if="settingsOpen"><i class="bi bi-x-lg"></i> {{ $t('navigation.close') }}</span>
        <span v-else><i class="bi bi-gear-fill"></i> {{ $t('navigation.settings') }}</span>
      </button>
      <button class="btn btn-link float-end" @click="toggleResume">
        <span v-if="resumeMatch"><i class="bi bi-pause-fill"></i> {{ $t('navigation.break') }}</span>
        <span v-else><i class="bi bi-play-fill"></i> {{ $t('navigation.resume') }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopBanner',
  emits: ['openSettingsEvent', 'openHelpEvent', 'openBreakPageEvent'],
  methods: {
    toggleSettings() {
      this.$emit('openSettingsEvent')
      this.settingsOpen = !this.settingsOpen
    },
    toggleHelp() {
      this.$emit('openHelpEvent')
      this.helpOpen = !this.helpOpen
    },
    toggleResume() {
      this.$emit('openBreakPageEvent')
      this.resumeMatch = !this.resumeMatch
    }
  },
  data() {
    return {
      settingsOpen: false,
      helpOpen: false,
      resumeMatch: true
    }
  },
  props: {
    boutName: { type: String, default: '' },
    bout: Number,
    message: String,
    mat: String
  }
})
</script>
