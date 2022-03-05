<template>
    <div class="ml-6 mt-5 mb-3">
        <div class="columns is-mobile is-align-left mt-1">
            <div class="column is-7 is-result-columns is-result-text">
                <span class="is-size-5">
                    {{ $t('text.calculator.fees') }}
                </span>
            </div>
            <div class="column is-5 is-result-columns is-result-value">
                <span class="is-size-5">
                    {{ isNaN(fees) ? 0 : fees }}<span v-if="$i18n.locale==='German'">€</span>
                </span> 
            </div>
        </div>
        <div class="columns is-mobile is-align-left">
            <div class="column is-7 is-result-columns is-result-text">
                <span class="is-size-5">
                    {{ $t('text.calculator.receive') }}
                </span> 
            </div>
            <div class="column is-5 is-result-columns is-result-value">
                <span class="is-size-5">
                    {{ isNaN(rest) ? 0 : rest }}<span v-if="$i18n.locale==='German'">€</span>
                </span> 
            </div>
        </div>
        <div class="columns is-mobile is-align-left">
            <div class="column is-7 is-result-columns is-result-text">
                <span class="is-size-5">
                    {{ $t('text.calculator.after_shipping') }}
                </span> 
            </div>
            <div class="column is-5 is-result-columns is-result-value">
                <span class="is-size-5">
                    {{ amount === '' ? 0 : shippingCost === '' ? rest : (rest-parseFloat(shippingCost)).toFixed(2) }}<span v-if="$i18n.locale==='German'">€</span>
                </span> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'results',
    props: {
        amount: {
            type: [String, Number],
            required: true
        },
        rest: {
            type: [String, Number],
            required: true
        },
        shippingCost: {
            type: [String, Number],
            required: true
        },
        fees: {
            type: [String, Number],
            required: true
        }
    }
}
</script>

<style>

</style>