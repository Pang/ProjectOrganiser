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
    }
}
</script>

<style scoped>
    .task {
        width: 180px;
        margin: 5px auto;
        padding: 5px 0;
        background-color: #a9e4cd; 
        border: dotted 2px #619983;
        cursor: pointer;
    }
</style>