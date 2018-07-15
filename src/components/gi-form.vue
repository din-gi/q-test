<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'GiForm',
        props: {
            validations: {
                type: Object,
                required: true
            }
        },
        beforeCreate() {
            debugger;
            this.$options.validations = validations;
        },
        methods: {
            validateForm() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.notify(this.$t('user.logging_failed'), 'negative')
                }
                else {
                    this.load(this.$t('user.logging_in'))
                    this.$services.Users.login(this.payload).then((response) => {
                        //debugger;
                        //this.$store.commit('auth/setAuth', response.data)
                        this.$store.commit('user/setUser', response.data)
                        this.load(false);
                        this.notify(this.$t('user.logging_successful'), 'positive')
                        this.$router.push('/clients');
                    }, (error) => {
                        this.load(false);
                        this.notify(this.$t('user.logging_failed'), 'negative')
                    });
                }
            }
        }
    }
</script>