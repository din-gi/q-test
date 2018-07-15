<template>
    <q-layout view="lHh Lpr lFf">
        <q-layout-header>
            <q-toolbar
                    color="primary"
                    :inverted="$q.theme === 'ios'"
            >
                <q-btn
                        flat
                        dense
                        round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        aria-label="Menu"
                >
                    <q-icon name="menu"/>
                </q-btn>

                <q-toolbar-title>
                    {{ this.$t('app.name') }}
                </q-toolbar-title>
            </q-toolbar>
        </q-layout-header>

        <q-layout-footer>
                <q-tabs inverted color="green-5" position="bottom">
                    <q-route-tab icon="account_box" to="/clients" exact slot="title"/>
                    <q-route-tab icon="build" to="/todo" exact slot="title"/>
                </q-tabs>
        </q-layout-footer>

        <q-layout-drawer
                v-model="leftDrawerOpen"
                :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
        >

            <q-list
                    no-border
                    inset-delimiter
            >
                <q-item>
                    <div class="row">
                        <div class="col-7 col-centered">
                            <img :src="$store.getters['user/getPicture']" class="responsive"/>
                        </div>
                    </div>
                </q-item>
                <q-item>
                    <q-item-main class="profile-name">
                        <q-item-tile>{{ fullName }}</q-item-tile>
                    </q-item-main>

                    <q-item-separator inset/>
                </q-item>
            </q-list>
        </q-layout-drawer>

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
                leftDrawerOpen: this.$q.platform.is.desktop
            }
        },
        computed: {
            fullName() {
                return `${this.$store.getters['user/getFirstName']} ${this.$store.getters['user/getLastName']}`
            }
        }
    }
</script>

<style>
</style>
