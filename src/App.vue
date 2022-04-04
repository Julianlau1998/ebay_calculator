<template>
  <div id="app">
    <TopNav />
    <router-view/>
  </div>
</template>

<script>
import TopNav from "@/components/topNav/TopNav.vue" 
export default {
  components: { TopNav },
  data () {
    return {
      iOS: false
    }
  },
  created () {
    this.iOS = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    this.$store.state.iOS = this.iOS
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6e9ec;
}
</style>
