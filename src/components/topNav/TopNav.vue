<template>
    <div class="is-topnav p-3 pb-4 pt-4">
        <div class="columns is-mobile">
            <div class="column ml-3">
                <span>
                    {{ $t('text.calculator.title') }}
                </span>
            </div>
            <div class="column settingsWrapper">
                <div v-if="settings" class="settingsItems settings">
                    <span @click="openSettings" class="is-pointer mt-6 setting noselect">
                        {{ $t('text.settings.settings') }}
                    </span>
                </div>
                <i
                    class="fas fa-ellipsis-v settings-icon is-pointer"
                    @click="settings=!settings"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data () {
        return {
            settings: false,
            shareAvailable: false
        }
    },
    created () {
        if(navigator.share !== undefined) {
            this.shareAvailable = true
        }
    },
    methods: {
        share () {
            this.$emit('share')
        },
        openSettings () {
            this.$router.push('settings')
            this.settings = !this.settings
        }
    }
}
</script>