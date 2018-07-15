<template>
    <div class="col-sm-12 col-md-6 col-centered">
        <div class="row gutter-md">
            <div class="col-12">
                <q-field :error="$v.payload.email.$error" error-label="Required">
                    <q-input @blur="$v.payload.password.$touch()" v-model="payload.email" :float-label="$t('user.email')" dark color="white"/>
                </q-field>
            </div>
            <div class="col-12">
                <q-field :error="$v.payload.password.$error" error-label="Required">
                    <q-input type="password" @blur="$v.payload.password.$touch()" v-model="payload.password" :float-label="$t('user.password')" dark color="white"/>
                </q-field>
            </div>
            <div class="col-12">
                <q-btn :label="$t('user.login_button')" @click="validateForm"  push dark color="brown-5" class="full-width" size="lg"/>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                payload: {
                    email: "",
                    password: ""
                }
            }
        },
        validations: {
            payload: {
                email: {
                    required
                },
                password: {
                    required
                }
            }
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
                        this.$store.commit('auth/setAuth', response.headers)
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
