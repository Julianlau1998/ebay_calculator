<template>
<div>
  <div class="columns is-centered">
    <div class="column">
      <!-- <img src="../../public/img/helpButton.png" class="topButton mt-5 mx-4" @click="$router.push('/help')"> -->
      <img src="../../public/img/settings.png" class="topButton mt-3" @click="$router.push('/settings')">
    </div>
  </div>
  <div class="columns is-centered mt-5">
    <div class="column">
      <calculator :page="page" />
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
      page: ''
    }
  },
  created () {
    this.page = 'send'
  },
  methods: {
    changePage(page) {
      this.page = page
    }
  }
}
</script>
