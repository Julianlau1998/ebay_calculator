<template>
  <div>
    <p id="text" class="mt-5">
        <b>
            {{ $t('text.settings.text') }}
        </b>
    </p>

    <div class="mt-5">
        <span>
          <input type="number" v-model="percent" class="input smallInput mr-4">
          <input type="number" v-model="base" class="input smallInput">
        </span>
        <br>
        <h3 class="mt-6">
          <select
            v-model="$i18n.locale"
            id="language"
            v-bind="selectedLanguage"
          >
            <option
              v-for="(lang, i) in langs" :key="`Lang${i}`"
              :value="lang"
            >
                {{ lang }}
            </option>
          </select>
        </h3> 
        
        <button class="button" id="save" @click="save()">
          <b>
            {{ $t('text.settings.save') }}
          </b>
        </button>
        <br><br>
        <button id="reset" @click="reset()">
          <b>
            {{ $t('text.settings.reset') }}
          </b>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent: 11,
      base: 0.35,
      langs: ['English', 'German'],
      selectedLanguage: ''
    }
  },
  created () {
    this.base = localStorage.getItem("base")
    this.percent = localStorage.getItem("percent")

    if(this.base==null){
      this.base = 0.35
    }
    if(isNaN(this.base)){
      this.base = 0.35
    }
    if(this.percent==null){
      this.percent = 11
    }  
    if(isNaN(this.percent)){
      this.percent = 11
    }
  },
  computed: {
    language () {
      return this.$i18n.locale
    }
  },
  watch: {
    language () {
      localStorage.setItem('language', this.language)
    }
  },
  methods: {
    reset () {
      this.percent = 11
      this.base = 0.35
    },
    save () {
      localStorage.setItem('percent', this.percent)
      localStorage.setItem('base', this.base)
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .smallInput {
    width: 5rem !important;
  }
  .button{
    margin-top: 10vw;
    font-size: large;
  }
  #reset{
    width: 11.5rem;
    margin-top: 2rem;
  }
  #language {
    width: 7rem;
    height: 1.8rem;
    font-size: large;
  }
  #save {
    width: 8rem;
  }
  
</style>