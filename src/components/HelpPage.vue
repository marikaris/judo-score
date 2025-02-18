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
    <div class="row">
      <div class="col">
        <h1>Key bindings</h1>
        To make use of the tool easier, a couple keys are bound to functions in the tool. See the
        table below for all available key bindings:
        <table class="table">
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
          <tr>
            <td>Tab</td>
            <td>Run timer</td>
          </tr>
          <tr>
            <td>Shift</td>
            <td>Run pin timer</td>
          </tr>
          <tr>
            <td>r</td>
            <td>Refresh all</td>
          </tr>
          <tr>
            <td>t</td>
            <td>Refresh timers</td>
          </tr>
          <tr>
            <td>g</td>
            <td>Golden score</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelpPage',
  methods: {},
  data() {
    return {}
  },
  props: {}
})
</script>
