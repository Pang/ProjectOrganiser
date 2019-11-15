<template>
    <div>
        <div class="task">
            <p>{{ task }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ["task"],
    methods: {
        log() {
            console.log()
        }
    }
}
</script>

<style scoped>
    .task {
        width: 180px;
        margin: 5px auto;
        padding: 5px 0;
        background-color: rgb(211, 211, 233); 
    }
</style>