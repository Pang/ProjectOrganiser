<template>
    <div>
        <div class="task">
            <span style="float:right"><b>···</b></span><br>
            <span style="padding-bottom: 20px">{{ task }}</span>
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
        background-color: #a9e4cd; 
        border: dotted 2px #619983;
        cursor: pointer;
        padding-bottom: 15px;
    }
</style>