<template>
    <q-page padding>
        <gi-form>
            <div>

            </div>
        </gi-form>
        modal page
    </q-page>
</template>

<style>
</style>

<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        name: 'ClientsNewPage',
        data() {
            return {
                payload: {
                    name: "",
                    taxId: ""
                }
            };
        },
        validations: {
            payload: {
                name: {
                    required
                },
                taxId: {}
            }
        },
        created() {
            debugger;
            this.$emit('modalCreated', {
                title: 'clients.new.title'
            });
        }
    }
</script>
