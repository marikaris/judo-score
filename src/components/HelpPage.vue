<template>
  <div class="row">
    <div class="col">
      <h1>About</h1>
      This tool was created by
      <a href="https://github.com/marikaris" taret="_blank">MariKariS</a>
      under
      <a href="https://github.com/marikaris/judo-score?tab=MIT-1-ov-file" taret="_blank"
        >MIT licence</a
      >. It is free to use as score board for judo competitions, without any warranty. Developer is
      not responsible for any bugs. If you do however encounter an issue, please submit it to the
      <a href="https://github.com/marikaris/judo-score/issues" taret="_blank">GitHub issue page</a>.
      Source code can be found on
      <a href="https://github.com/marikaris/judo-score/" taret="_blank">GitHub</a>.
    </div>
    <div class="row mt-4">
      <div class="col">
        <h1>Timer modes (age groups)</h1>
        <p>
          In <b>Settings → Time</b> you can select the timer strategy. This setting is stored and
          will stay the same until you change it again.
        </p>
        <ul>
          <li><b>13-</b>: counts down from the configured <b>Max time</b> to <b>00:00</b> and stops.</li>
          <li><b>13+</b>: counts up from <b>00:00</b> until you stop the timer.</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1 style="padding-top: 25px;">Key bindings</h1>
        To make use of the tool easier, a couple keys are bound to functions in the tool. See the
        table below for all available key bindings:
        <div class="row g-3 align-items-start">
          <div class="col-12 col-lg-6">
            <table class="table">
              <tr>
                <th>Key</th>
                <th>Function</th>
              </tr>
              <tr>
                <td>Tab, Control</td>
                <td>Run timer</td>
              </tr>
              <tr>
                <td>Shift</td>
                <td>Run pin timer</td>
              </tr>
              <tr>
                <td>r, R</td>
                <td>Refresh all</td>
              </tr>
              <tr>
                <td>t, T</td>
                <td>Refresh timers</td>
              </tr>
              <tr>
                <td>g, G</td>
                <td>Golden score</td>
              </tr>
            </table>
          </div>
          <div class="col-12 col-lg-6 d-flex justify-content-center">
            <img
              :src="keyboardSvg"
              alt="Keyboard layout for player key bindings"
              class="img-fluid"
              style="max-width: 600px; width: 100%"
            />
          </div>
        </div>

        <h2>Add/Subtract scoring (keyboard)</h2>
        <p>
          Each player has dedicated keys for increasing (+) and decreasing (−) their scores. These
          keys mirror the +/- buttons on the scoreboard and follow the rules below.
        </p>
        <div class="row">
          <div class="col-md-6">
            <h3>Player 1</h3>
            <table class="table">
              <tr>
                <th>Key</th>
                <th>Result</th>
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
            <h3>Player 2</h3>
            <table class="table">
              <tr>
                <th>Key</th>
                <th>Result</th>
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

        <h2>Scoring rules for additions and subtractions</h2>
        <ul>
          <li>Scores cannot go below 0. Subtracting at 0 has no effect.</li>
          <li>
            Two Waza-ari automatically convert to one Ippon (the Waza-ari counter resets to 0 and
            Ippon increases by 1).
          </li>
          <li>
            When a player receives an Ippon, they immediately win the match. If the setting
            “Ippon stops time” is enabled, the match timer is stopped automatically.
          </li>
          <li>
            Yuko can be disabled in Settings. When disabled, Yuko values are hidden and related key
            bindings are ignored.
          </li>
          <li>You can also use the on-screen + / − buttons to change each score.</li>
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
