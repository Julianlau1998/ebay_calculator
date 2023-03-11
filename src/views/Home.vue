<template>
<div class="mt-wrapper">
  <div class="columns is-centered mt-5">
    <div class="column">
      <calculator />
    </div>
  </div>
  <AdCard v-if="!iOS" class="mt-5" />
</div>
</template>

<script>
import calculator from '@/components/Calculator.vue'
import AdCard from "@/components/ads/AdCard"

export default {
  name: 'home-component',
  components: {
    calculator,
    AdCard
  },
  computed: {
    iOS () {
      return this.$store.state.iOS
    }
  }
}
</script>
