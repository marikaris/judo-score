<template>
  <div class="row">
    <div class="col">
      <h1>{{ $t('help.about') }}</h1>
      {{ $t('help.intro') }}
      <a href="https://github.com/marikaris" target="_blank">MariKariS</a>
      {{ $t('help.under') }}
      <a href="https://github.com/marikaris/judo-score?tab=MIT-1-ov-file" target="_blank"
        >MIT licence</a
      >.
      {{ $t('help.licenceDescription') }}
      <a href="https://github.com/marikaris/judo-score/issues" target="_blank">{{ $t('help.issuePage') }}</a>.
      {{ $t('help.source') }}
      <a href="https://github.com/marikaris/judo-score/" target="_blank">GitHub</a>.
    </div>
    <div class="row mt-4">
      <div class="col">
        <h1>{{ $t('help.timerModes') }}</h1>
        <p>
          {{ $t('help.timerModeDescription') }}
        </p>
        <ul>
          <li><b>13-</b>: {{ $t('help.countdownDescription') }}</li>
          <li><b>13+</b>: {{ $t('help.countupDescription') }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1 style="padding-top: 25px;">{{ $t('help.keyBindings') }}</h1>
        {{ $t('help.keyBindingsDescription') }}
        <div class="row g-3 align-items-start">
          <div class="col-12 col-lg-6">
            <table class="table">
              <tr>
                <th>{{ $t('help.key') }}</th>
                <th>{{ $t('help.function') }}</th>
              </tr>
              <tr>
                <td>Tab, Control</td>
                <td>{{ $t('help.runTimer') }}</td>
              </tr>
              <tr>
                <td>Shift</td>
                <td>{{ $t('help.runPinTimer') }}</td>
              </tr>
              <tr>
                <td>r, R</td>
                <td>{{ $t('help.refreshAll') }}</td>
              </tr>
              <tr>
                <td>t, T</td>
                <td>{{ $t('help.refreshTimers') }}</td>
              </tr>
              <tr>
                <td>g, G</td>
                <td>{{ $t('timer.goldenScore') }}</td>
              </tr>
            </table>
          </div>
          <div class="col-12 col-lg-6 d-flex justify-content-center">
            <img
              :src="keyboardSvg"
              :alt="$t('help.keyboardLayout')"
              class="img-fluid"
              style="max-width: 600px; width: 100%"
            />
          </div>
        </div>

        <h2>{{ $t('help.scoringKeyboard') }}</h2>
        <p>{{ $t('help.scoringKeyboardDescription') }}</p>
        <div class="row">
          <div class="col-md-6">
            <h3>{{ $t('help.playerOne') }}</h3>
            <table class="table">
              <tr>
                <th>{{ $t('help.key') }}</th>
                <th>{{ $t('help.result') }}</th>
              </tr>
              <tr>
                <td>a, A</td>
                <td>Ippon +1</td>
              </tr>
              <tr>
                <td>z, Z</td>
                <td>Ippon −1</td>
              </tr>
              <tr>
                <td>s, S</td>
                <td>Waza-ari +1</td>
              </tr>
              <tr>
                <td>x, X</td>
                <td>Waza-ari −1</td>
              </tr>
              <tr>
                <td>d, D</td>
                <td>Yuko +1</td>
              </tr>
              <tr>
                <td>c, C</td>
                <td>Yuko −1</td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <h3>{{ $t('help.playerTwo') }}</h3>
            <table class="table">
              <tr>
                <th>{{ $t('help.key') }}</th>
                <th>{{ $t('help.result') }}</th>
              </tr>
              <tr>
                <td>j, J</td>
                <td>Ippon +1</td>
              </tr>
              <tr>
                <td>m, M</td>
                <td>Ippon −1</td>
              </tr>
              <tr>
                <td>k, K</td>
                <td>Waza-ari +1</td>
              </tr>
              <tr>
                <td>,</td>
                <td>Waza-ari −1</td>
              </tr>
              <tr>
                <td>l, L</td>
                <td>Yuko +1</td>
              </tr>
              <tr>
                <td>.</td>
                <td>Yuko −1</td>
              </tr>
            </table>
          </div>
        </div>

        <h2>{{ $t('help.scoringRules') }}</h2>
        <ul>
          <li>{{ $t('help.scoreCannotBeNegative') }}</li>
          <li>{{ $t('help.twoWazaAri') }}</li>
          <li>{{ $t('help.ipponWins') }}</li>
          <li>{{ $t('help.yukoDisabled') }}</li>
          <li>{{ $t('help.onScreenControls') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const keyboardSvg = new URL('../../docs/assets/KeyboardLayoutConfig.svg', import.meta.url).href

export default defineComponent({
  name: 'HelpPage',
  methods: {},
  data() {
    return {
      keyboardSvg
    }
  },
  props: {}
})
</script>
