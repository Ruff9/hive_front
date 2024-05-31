<template>
    <section class="hive-form-container">
        <form v-on:submit.prevent="addItem" class="hive-form">
            <label class="hive-form-input-label">Nom *: <input v-model="name" required></label>
            <label class="hive-form-input-label">Poids *: <input v-model="weight" required></label>
            <label class="hive-form-input-label">Description : <textarea v-model="description"></textarea></label>

            <button type="submit" class="hive-form-submit">Ajouter ruche</button>
        </form>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        emits: ['add-hive'],
        data() {
            return {
                name: '',
                weight: '',
                description: ''
            }
        },
        methods: {
            addItem() {
                const path = import.meta.env.VITE_BACKEND_URL + '/hives/';
                axios.post(path, {
                    name: this.name,
                    weight: this.weight,
                    description: this.description
                }).then((res) => {
                    this.name = null
                    this.weight = null
                    this.description = null
                    console.log("Successfully Saved");
                    this.$emit('add-hive')
                }).catch(()=>{
                    console.log("Something Went Wrong");
                })
            }
        }
    }
</script>

<style>
    .hive-form-container {
        border: 2px solid red;
        width: 60%;
        margin: 0 auto 20px;
        padding: 5px;
    }

    .hive-form {
        display: flex;
        flex-direction: column;
    }

    .hive-form-input-label {
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .hive-form-submit {
        background-color: orange;
        margin: 10px auto 5px;
        padding: 5px 10px;
        cursor: pointer;
    }
</style>