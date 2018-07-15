<template>
    <q-page padding>
        <jb-tasks :tasks="tasks"/>
    </q-page>
</template>

<style>
</style>

<script>
    import Tasks from '../components/jb-tasks'

    export default {
        name: 'PageIndex',
        data(){
            return {
                tasks: []
            };
        },
        components: {
            'jb-tasks': Tasks
        }
    }
</script>
