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
        <span v-if="helpOpen"><i class="bi bi-x-lg"></i> Close</span>
        <span v-else><i class="bi bi-question-diamond-fill"></i> Help</span>
      </button>
      <button class="btn btn-link float-end" @click="toggleSettings">
        <span v-if="settingsOpen"><i class="bi bi-x-lg"></i> Close</span>
        <span v-else><i class="bi bi-gear-fill"></i> Settings</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopBanner',
  emits: ['openSettingsEvent', 'openHelpEvent'],
  methods: {
    toggleSettings() {
      this.$emit('openSettingsEvent')
      this.settingsOpen = !this.settingsOpen
    },
    toggleHelp() {
      this.$emit('openHelpEvent')
      this.helpOpen = !this.helpOpen
    }
  },
  data() {
    return {
      settingsOpen: false,
      helpOpen: false
    }
  },
  props: {
    boutName: { type: String, default: 'Ronde' },
    bout: Number,
    message: String,
    mat: String
  }
})
</script>
