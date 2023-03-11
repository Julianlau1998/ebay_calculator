<template>
  <div class="is-flex-center mt-2">
    <div class="field pt-5 pb-5" ref="calculator">
    <div class="control mb-5">
        <div class="columns is-mobile is-justify-content-center is-align--center mt-2">
            <div class="column is-4 is-result-columns">
                <label for="price" class="is-size-4">
                    {{ $t('text.calculator.cost') }}
                </label>
            </div>
            <div class="column is-7 is-result-columns">
                <input
                    id="price"
                    v-model="amount"
                    @click="focus()"
                    class="input mt-1 is-input"
                    type="number"
                    placeholder="0"
                >
            </div>
        </div>
    </div>
    <div class="control mt-4">
        <div class="columns is-mobile is-justify-content-center is-align-items-center">
            <div class="column is-4">
                <label for="shipping" class="is-size-4">
                    {{ $t('text.calculator.shipping_cost') }}
                </label>
            </div>
            <div class="column is-7">
                <input
                    id="shipping"
                    v-model="shippingCost"
                    @click="focus()"
                    class="input mt-1 is-input"
                    type="number"
                    placeholder="0"
                >
            </div>
        </div>
    </div>
    <div class="mt-5 columns is-mobile">
        <div class="column is-12 ml-1">
            <label class="checkbox">
                <input type="checkbox" class="mr-2" v-model="freeShipping">
                {{ $t('text.calculator.free_shipping') }}
            </label>
        </div>
    </div>
    <div class="hr" />
    <Results
        :amount="amount"
        :rest="rest"
        :shipping-cost="shippingCost"
        :fees="fees"
     />
    </div>
  </div>
</template>

<script>
import Results from '@/components/Results.vue'

export default {
    name: 'calculator-component',
    components: {
        Results
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
            const amountPlusShipping = parseFloat(this.shippingCost) + parseFloat(this.amount)
            let val = localStorage.getItem("base")
            if(val==null){
                val = 0.35
            }
            if(isNaN(val)){
                val = 0.35
            }
            return amountPlusShipping < 10 && this.amount > 0.05 ? 0.05 : amountPlusShipping > 10 ? parseFloat(val) : 0
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
