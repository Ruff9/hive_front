<template>
    <section class="hive-list">
        <div v-for="hive in hives" class="hive-item">
            <span>{{ hive.name }}</span>
            <span>{{ hive.weight }} kg</span>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                hives: ['']
            }
        },
        methods: {
            async getData() {
                try {
                    const path = import.meta.env.VITE_BACKEND_URL + '/hives/';
                    const response = await axios.get(path);
                    this.hives = response.data;
                } catch (error) {
                    console.log(error);
                }
            },
        },
        created() {
            this.getData();
        }
    }
</script>

<style>
    .hive-item {
        border: 2px solid blueviolet;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        padding: 5px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
</style>