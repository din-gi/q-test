import {QSpinnerRings} from 'quasar'

export default {
    methods: {
        load(message = "Loading..") {
            if (message === false) {
                this.$q.loading.hide()
            }
            else {
                this.$q.loading.show({
                    spinner: QSpinnerRings,
                    message,
                    spinnerSize: 150, // in pixels
                })
            }
        },
        notify(message, type = "positive") {
            this.$q.notify({
                message,
                type
            });
        }
    }
}