<template>
  <div class="mt-7">
    <p id="text" class="mt-5">
        <b>
            {{ $t('text.settings.text') }}
        </b>
    </p>

    <div class="mt-5">
        <span>
          <input type="number" v-model="percent" class="input is-input smallInput mr-4">
          <input type="number" v-model="base" class="input is-input smallInput">
        </span>
        <br>
        <div class="select mt-5">
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
        </div>
        <br>
        
        <button class="button is-round is-small-button" id="save" @click="save()">
          <b>
            {{ $t('text.settings.save') }}
          </b>
        </button>
        <br>
        <button class="button is-round is-small-button mt-5" id="reset" @click="reset()">
          <b>
            {{ $t('text.settings.reset') }}
          </b>
        </button>
        <br>
        <a v-if="!iOS" class="button mt-7" id="rate" href='https://play.google.com/store/apps/details?id=com.gebuehrenrechner_ebay_en_bf2cfb55_7a71_4b17_9751_be132c8981c0&gl=DE'>
          <b>
            {{ $t('text.settings.rate') }}
          </b>
        </a>
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
    },
    iOS () {
      return this.$store.state.iOS
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