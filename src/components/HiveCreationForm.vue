<template>
    <form v-on:submit.prevent="addItem" class="hive-form">
        <div class="hive-form-fields">
            <div class="hive-form-section1">
                <label class="hive-form-input-label">Nom *<input v-model="name" name="hive-name" required :minlength="6" placeholder="Six caractères minimum"></label>
                <label class="hive-form-input-label">Poids *<input v-model="weight" name="hive-weight" required  placeholder="En kg"></label>
            </div>
            <div class="hive-form-section2">
                <label class="hive-form-input-label hive-form-textarea-label">Description<textarea v-model="description" name="hive-description"></textarea></label>
            </div>
        </div>

        <button type="submit" class="hive-form-submit">Ajouter ruche</button>
    </form>
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
                const params = {
                    name: this.name,
                    weight: this.weight,
                    description: this.description
                }
                const path = import.meta.env.VITE_BACKEND_URL + '/hives/';

                axios.post(path, params)
                .then((res) => {
                    this.name = null
                    this.weight = null
                    this.description = null
                    this.$emit('add-hive', res.data)
                }).catch(()=>{
                    console.log("Something Went Wrong");
                })
            }
        }
    }
</script>

<style>
    .hive-form {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    }

    .hive-form-fields {
        display: flex;
        justify-content: space-between;
    }

    .hive-form-section1 {
        margin-right: 10px;
        width: 250px;
    }

    .hive-form-section2 {
        width: 250px;
    }

    .hive-form-input-label {
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .hive-form-textarea-label {
        height: 100%;

        textarea { height: 100%; }
    }

    .hive-form-submit {
        background-color: #FFC233;
        color: #197278;
        margin: 20px auto 10px;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: bold;
    }
</style>