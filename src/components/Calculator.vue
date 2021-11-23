<template>
  <div class="is-flex-center">
    <div class="field pt-5 pb-5" ref="calculator">
    <div class="control mb-5">
        <label for="price">
            {{ $t('text.calculator.cost') }}
        </label>
        <br>
        <input
            id="price"
            v-model="amount"
            @click="focus()"
            class="input is-small mt-1 is-input"
            type="number"
            placeholder="0"
        >
    </div>
    <div>
        <label class="checkbox">
        <input type="checkbox" v-model="freeShipping">
            {{ $t('text.calculator.free_shipping') }}
        </label>
    </div>
    <div class="control mt-4">
        <label for="shipping">
            {{ $t('text.calculator.shipping_cost') }}
        </label>
        <br>
        <input
            id="shipping"
            v-model="shippingCost"
            @click="focus()"
            class="input is-small mt-1 is-input"
            type="number"
            placeholder="0"
        >
    </div>
    <p class="solutionParagraph mb-1 mt-5">
        <span class="is-size-4">
            {{ $t('text.calculator.fees') }}
        </span>
        <span class="is-size-4">
            {{ isNaN(fees) ? 0 : fees }}<span v-if="$i18n.locale==='German'">€</span>
        </span> 
        <br />
        <span v-if="page==='send'" class="is-size-4">
            {{ $t('text.calculator.receive') }}
        </span> 
        <span class="is-size-4">
          {{ isNaN(rest) ? 0 : rest }}<span v-if="$i18n.locale==='German'">€</span>
        </span> 
        <br>
        <span v-if="page==='send'" class="is-size-4">
            {{ $t('text.calculator.after_shipping') }}
        </span> 
        <span class="is-size-4">
          {{ amount === '' ? 0 : shippingCost === '' ? rest : rest-parseFloat(shippingCost) }}<span v-if="$i18n.locale==='German'">€</span>
        </span> 
    </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        page: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            amount: '',
            percent: 11,
            freeShipping: false,
            shippingCost: ''
        }
    },
    created () {
        this.percent = localStorage.getItem("percent")
        if(this.percent==null){
        this.percent = 11
        }  
        if(isNaN(this.percent)){
        this.percent = 11
        }

        this.percent = this.percent/100
        this.percent = Math.round(this.percent*10000)/10000
        this.percent = parseFloat(this.percent)
    },
    computed: {
        base () {
            let val = localStorage.getItem("base")
            if(val==null){
                val = 0.35
            }
            if(isNaN(val)){
                val = 0.35
            }
            return this.amount < 10 && this.amount > 0.05 ? 0.05 : this.amount > 10 ? parseFloat(val) : 0
        },
        fees () {
            let shipping = this.freeShipping ? 0 : this.shippingCost
            let amountBelowMax = parseFloat(this.amount) <= 1900 ? parseFloat(this.amount) : parseFloat(this.amount) > 1900 ? 1900 : 0
            let amountAboveMax = parseFloat(this.amount) > 1900 ? parseFloat(this.amount)-1900 : 0
            let solutionBelowMax = 0
            let solutionAboveMax = 0

            if (shipping === '') shipping = 0
            if (amountBelowMax != null) {
                solutionBelowMax = ((amountBelowMax + parseFloat(shipping)) * this.percent)
                solutionBelowMax = amountBelowMax > 0.35 ? Math.round(solutionBelowMax * 100) / 100 : 0
            }
            if (amountAboveMax > 0) {
                solutionAboveMax = amountAboveMax * this.percent
            }
            const endSolution = solutionBelowMax + solutionAboveMax + this.base
            return Math.round(endSolution*100)/100
        },
        rest () {
            let rest = 0
            const shipping = this.shippingCost !== '' ? parseFloat(this.shippingCost) : 0
            console.log(shipping)
            if (this.amount != null && this.amount !== 0 && shipping != null) {
                if (!this.freeShipping) {
                    rest = parseFloat(this.amount) + parseFloat(shipping) - this.fees
                    return Math.round(rest*100)/100
                }
                rest = parseFloat(this.amount)-this.fees
                return Math.round(rest*100)/100
            }
            return 0
        }
    },
    methods: {
        focus() {
            this.$refs.calculator.style.opacity = '-3rem'
        }
    }
}
</script>

<style>

</style>