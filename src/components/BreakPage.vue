<template>
  <div class="veryBig text-center">
    {{ mat }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreakPage',
  props: {
    mat: {
      type: String,
      required: true
    }
  },
  methods: {},
  data() {
    return {}
  }
})
</script>
<style :scoped>
.veryBig {
  font-size: 30em;
}
</style>
