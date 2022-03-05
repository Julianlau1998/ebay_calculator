<template>
  <div id="app">
    <TopNav />
    <router-view/>
  </div>
</template>

<script>
import TopNav from "@/components/topNav/TopNav.vue" 
export default {
  components: { TopNav }
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
