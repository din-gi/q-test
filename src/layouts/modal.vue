<template>
    <q-layout view="lHh Lpr lFf" @modalCreated="renderModal">
        <q-layout-header>
            <q-toolbar
                    color="dark"
                    :inverted="$q.theme === 'ios'"
            >
                <q-toolbar-title>
                    {{ this.$t(title) }}
                </q-toolbar-title>
                <q-btn
                        flat
                        dense
                        round
                        @click.native="$router.go(-1)"
                        aria-label="Menu"
                >
                    <q-icon name="fas fa-arrow-left"/>
                </q-btn>
            </q-toolbar>
        </q-layout-header>

        <q-layout-footer :reveal="!buttons">
            {{ buttons }}
        </q-layout-footer>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>

    export default {
        name: 'LayoutDefault',
        data() {
            return {
                title: "",
                buttons: ""
            }
        },
        methods: {
            renderModal(e, params) {
                debugger;
                this.title = params.title

                if (params)
                    this.buttons = params.title
            }
        }
    }
</script>

<style>
</style>
