<template>
    <q-page padding>
        <q-infinite-scroll :handler="loadMore" ref="infiniteScroll">
            <p v-for="item in items" class="caption">
                {{ item.name }}
            </p>

            <q-spinner-dots slot="message" :size="20"></q-spinner-dots>
        </q-infinite-scroll>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn round color="primary" @click.native="$router.push('clients/new')" icon="add"/>
        </q-page-sticky>
    </q-page>
</template>

<style>
</style>

<script>
    export default {
        name: 'ClientsPage',
        data() {
            return {
                items: [],
                searchPayload: {
                    page: 1,
                    //pageSize: 1
                }
            }
        },
        methods: {
            loadMore (index, done) {
                this.searchPayload.page = index;

                this.$services.Clients.search(this.searchPayload).then((response) => {
                    debugger;
                    this.items = this.items.concat(response.data.items);
                    //debugger;
                    // If it's the only page or no pages
                    /*if (response.data.pages <= 1) {
                        this.$refs['infiniteScroll'].stop();
                    }*/

                    // If it's the last page
                    if (response.data.pages === response.data.page) {
                        this.$refs['infiniteScroll'].stop();
                    }

                    done();
                }, (error) => {
                    debugger;
                    this.notify(this.$t('general.load_failed'), 'negative')
                    if (error.status == 401)
                        this.$router.push('/auth/login');
                    else
                        this.$refs['infiniteScroll'].stop();
                    done();
                });
            }
        }
    }
</script>
