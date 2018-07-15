<template>
    <div class="row gutter-md">
        <div class="col-8">
            <q-input float-label="Enter to do" type="text" v-model="taskInput"/>
        </div>
        <div class="col-4">
            <q-btn label="Add" icon="fas fa-plus" @click="addTask"/>
        </div>
        <div class="col-12">
            <q-list v-if="tasks.length !== 0"highlight>
                <jb-task v-for="(task, index) in tasks" :task="task" :key="index" @delete="deleteTask(index)"/>
            </q-list>
        </div>
        <div class="col-4">
            <q-btn label="Complete All" icon="fas fa-check" @click="completeAll"/>
        </div>
        <div class="col-4">
            <q-btn label="Delete All" icon="fas fa-trash" @click="deleteAll"/>
        </div>
    </div>
</template>

<script>
    import Task from './jb-task'

    export default {
        name: 'Tasks',
        props: {
            tasks: {
                type: Array,
            }
        },
        data() {
            return {
                taskInput: ""
            };
        },
        components: {
            'jb-task': Task
        },
        methods: {
            addTask() {
                if (this.taskInput !== '') {
                    this.$q.notify({
                        message: `Added item: ${this.taskInput}`,
                        color: 'positive'
                    });

                    let task = {
                        text: this.taskInput,
                        completed: false,
                    };
                    this.tasks.push(task);
                    this.taskInput = '';
                }
            },
            completeAll() {
                this.tasks.forEach(function(task) {
                    task.completed = true;
                });
            },
            deleteAll() {
                this.tasks = [];
            },
            deleteTask(index) {
                this.tasks.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
