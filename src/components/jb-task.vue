<template>
    <q-item @click.native="task.completed = !task.completed" :class="{'bg-info': task.completed}">
        <q-item-main>
            {{ task.text }}
        </q-item-main>
        <q-item-side>
            <q-btn label="Delete" color="negative" icon="fas fa-minus" @click="$emit('delete')" />
        </q-item-side>
    </q-item>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: {
                type: Object,
            }
        }
    }
</script>

<style>
</style>
