<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col-7">
          <h1>{{ $t('settings.title') }}</h1>
        </div>
        <div class="col"></div>
      </div>
      <form>
        <h2>{{ $t('settings.general') }}</h2>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end" for="locale">{{ $t('settings.language') }}:</label>
          <div class="col-sm-3">
            <select id="locale" class="form-select" v-model="localePreference" @change="changeLocale">
              <option value="auto">{{ $t('settings.automatic') }}</option>
              <option value="en">{{ $t('settings.english') }}</option>
              <option value="nl">{{ $t('settings.dutch') }}</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.mat') }}: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="mat" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.boutName') }}: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="boutTxt" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.welcomeMessage') }}: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="msg" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.fontScale') }}: </label>
          <div class="col-sm-2">
            <input type="number" step="0.1" min="0.5" max="2" class="form-control" v-model="fontScale" />
          </div>
          <div class="col-sm-3">
            <button class="btn btn-primary" @click.prevent="fontScale = Math.min(2, fontScale + 0.1)">+</button>
            <button class="btn btn-primary" @click.prevent="fontScale = Math.max(0.5, fontScale - 0.1)">-</button>
          </div>
        </div>
        <h2>{{ $t('settings.score') }}</h2>
        <div class="row">
          <div class="col-3"></div>
          <div class="form-check col-3">
            <input class="form-check-input" type="checkbox" id="yuko" v-model="yuko" />
            <label class="form-check-label" for="yuko"> {{ $t('settings.addYuko') }} </label>
          </div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="form-check col-3">
            <input class="form-check-input" type="checkbox" id="hideShido" v-model="hideShido" />
            <label class="form-check-label" for="hideShido"> {{ $t('settings.hideShido') }} </label>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.maxShidos') }}: </label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="maxShidos" :disabled="hideShido" />
          </div>
        </div>
        <h2>{{ $t('settings.players') }}</h2>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.playerOne') }}: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="p1" />
          </div>
        </div>
        <!-- colour of players -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.playerTwo') }}: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="p2" />
          </div>
        </div>
        <h2>{{ $t('settings.time') }}</h2>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.maxTime') }}: </label>
          <div class="col-sm-2">
            <input type="number" class="form-control" v-model="maxMatchTime" />
          </div>
          <div class="col-sm-1">{{ convertSecondsToMinutes(maxMatchTime) }} {{ $t('settings.minutes') }}</div>
          <div class="col-sm-3">
            <button class="btn btn-primary" @click.prevent="maxMatchTime += 60">+ 1 min</button>
            <button class="btn btn-primary" @click.prevent="maxMatchTime -= 60">- 1 min</button>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> {{ $t('settings.maxPinTime') }}: </label>
          <div class="col-sm-2">
            <input type="number" class="form-control" v-model="maxPinTime" />
          </div>
          <div class="col-sm-1">{{ $t('settings.seconds') }}</div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="form-check col-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="ipponStopsTime"
              v-model="ipponStopsTime"
            />
            <label class="form-check-label" for="ipponStopsTime"> {{ $t('settings.ipponStopsTime') }} </label>
          </div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3">
            <br />
            <form>
              <div class="mb-1 fw-semibold">{{ $t('settings.timerStrategy') }}</div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="down"
                  v-model="countdown"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {{ $t('settings.countdown') }}
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="up"
                  v-model="countdown"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  {{ $t('settings.countup') }}
                </label>
              </div>
            </form>
          </div>
        </div>
      </form>
      <button class="btn btn-primary" @click.prevent="$emit('saveSettings')">
        <i class="bi bi-floppy-fill"></i> {{ $t('settings.save') }}
      </button>
    </div>
    <!-- <div class="col">
      <label for="exampleColorInput" class="form-label">Color picker</label>
      <input
        type="color"
        class="form-control form-control-color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      />
    </div> -->
  </div>
</template>

<script lang="ts">
import { convertSecondsToMinutes } from '@/utils/utils'
import { defineComponent } from 'vue'
import { getLocalePreference, setLocalePreference, type LocalePreference } from '@/i18n'

const COUNTDOWN_STORAGE_KEY = 'judo-score:countdown'

export default defineComponent({
  name: 'BoardSettings',
  emits: ['saveSettings'],
  methods: {
    convertSecondsToMinutes,
    changeLocale() {
      setLocalePreference(this.localePreference)
    }
  },
  created() {
    const stored = window.localStorage.getItem(COUNTDOWN_STORAGE_KEY)
    if (stored === 'down' || stored === 'up') {
      this.countdown = stored
    }
  },
  watch: {
    countdown(newValue: string) {
      if (newValue === 'down' || newValue === 'up') {
        window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, newValue)
      }
    }
  },
  data() {
    return {
      countdown: 'down',
      localePreference: getLocalePreference() as LocalePreference,
      maxMatchTime: 120,
      maxPinTime: 20,
      maxShidos: 3,
      p1: this.$t('defaults.playerOne'),
      p2: this.$t('defaults.playerTwo'),
      colP1: 'white',
      colP2: 'red',
      mat: this.$t('defaults.mat'),
      boutTxt: this.$t('defaults.boutName'),
      fontScale: 1,
      ipponStopsTime: true,
      yuko: true,
      hideShido: false,
      msg: this.$t('defaults.welcomeMessage')
    }
  }
})
</script>
