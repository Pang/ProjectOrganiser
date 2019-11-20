<template>
    <div class="modal">
        <div class="modal-content" v-if="$store.state.modalColEdit">
            <span class="close" @click="closeModal()">X</span>
            <p>Enter a new header for this column:</p>
            <input v-model="colHeaderText" type="text" /> <br><br>
            <button @click="changeHeader()">Submit</button>
        </div>

        <div class="modal-content" v-if="$store.state.modalColRemove">
            <span class="close" @click="closeModal()">X</span>
            <p>Are you sure you want to delete this column?</p>
            <button @click="removeColumn()">YES</button>
            <button @click="closeModal()">NO</button>
        </div>

        <div class="modal-content" v-if="$store.state.modalColAdd">
            <span class="close" @click="closeModal()">X</span>
            <p>Enter a name for your column:</p>
            <input v-model="colHeaderText" type="text" /> <br><br>
            <button @click="addColumn()">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalCol",
    data() {
        return {
            colHeaderText: "",
        }
    },
    methods: {
        closeModal() {
            this.$store.state.modalColEdit = false;
            this.$store.state.modalColRemove = false;
            this.$store.state.modalColAdd = false;
        },
        changeHeader() {
            this.$store.dispatch('editColumnHeader', { title: this.$store.state.selectedCol, newTitle: this.colHeaderText });
            this.closeModal();
        },
        removeColumn() {
            this.$store.dispatch('removeColumn', { title: this.$store.state.selectedCol });
            this.closeModal();
        },
        addColumn() {
            this.$store.dispatch('addColumn', { title: this.colHeaderText });
            this.closeModal();
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 400px;
    z-index: 2;
}
.close {
    float: right; 
    cursor: pointer
}
button + button {
    margin-left: 20px;
}
</style>