<template>
<div class="mt-wrapper">
  <div class="columns is-centered mt-5">
    <div class="column">
      <calculator />
    </div>
  </div>
</div>
</template>

<script>
import calculator from '@/components/Calculator.vue'

export default {
  name: 'Home',
  components: {
    calculator
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
