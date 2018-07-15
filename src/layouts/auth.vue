<template>
    <div class="flex flex-center q-px-xl window-height bg-green-5">
        <div class="row gutter-md">
            <div class="col-12 text-center">
                <gi-logo height="48"/>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        // name: 'LayoutName',
        data() {
            return {
                leftDrawer: true
            }
        }
    }
</script>

<style>
</style>
