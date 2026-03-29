<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col-7">
          <h1>Settings</h1>
        </div>
        <div class="col"></div>
      </div>
      <form>
        <h2>General</h2>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Mat: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="mat" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Bout name: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="boutTxt" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Welcome message: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="msg" />
          </div>
        </div>
        <h2>Score</h2>
        <div class="row">
          <div class="col-3"></div>
          <div class="form-check col-3">
            <input class="form-check-input" type="checkbox" id="yuko" v-model="yuko" />
            <label class="form-check-label" for="yuko"> Add yuko </label>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Max number of shido's: </label>
          <div class="col-sm-3">
            <input type="number" class="form-control" v-model="maxShidos" />
          </div>
        </div>

        <h2>Players</h2>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Player 1 name: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="p1" />
          </div>
        </div>
        <!-- colour of players -->
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Player 2 name: </label>
          <div class="col-sm-3">
            <input type="string" class="form-control" v-model="p2" />
          </div>
        </div>
        <h2>Time</h2>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Max time: </label>
          <div class="col-sm-2">
            <input type="number" class="form-control" v-model="maxMatchTime" />
          </div>
          <div class="col-sm-1">{{ convertSecondsToMinutes(maxMatchTime) }} min</div>
          <div class="col-sm-3">
            <button class="btn btn-primary" @click.prevent="maxMatchTime += 60">+ 1 min</button>
            <button class="btn btn-primary" @click.prevent="maxMatchTime -= 60">- 1 min</button>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label text-end"> Max pin time: </label>
          <div class="col-sm-2">
            <input type="number" class="form-control" v-model="maxPinTime" />
          </div>
          <div class="col-sm-1">sec</div>
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
            <label class="form-check-label" for="ipponStopsTime"> Ippon stops time </label>
          </div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3">
            <br />
            <form>
              <div class="mb-1 fw-semibold">Age group / timer strategy</div>
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
                  13- (count down from max time)
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
                  13+ (count up from 0 until stopped)
                </label>
              </div>
            </form>
          </div>
        </div>
      </form>
      <button class="btn btn-primary" @click.prevent="$emit('saveSettings')">
        <i class="bi bi-floppy-fill"></i> Save
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

const COUNTDOWN_STORAGE_KEY = 'judo-score:countdown'

export default defineComponent({
  name: 'BoardSettings',
  emits: ['saveSettings'],
  methods: {
    convertSecondsToMinutes
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
      maxMatchTime: 120,
      maxPinTime: 20,
      maxShidos: 3,
      p1: 'Player 1',
      p2: 'Player 2',
      colP1: 'white',
      colP2: 'red',
      msg: 'Yuseigachi Norg',
      mat: 'Mat 1',
      boutTxt: 'Ronde',
      ipponStopsTime: true,
      yuko: true
    }
  }
})
</script>
