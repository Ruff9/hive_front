<template>
    <section class="hive-list">
        <div v-for="hive in hives" class="hive-link-name">
            <span>{{ hive.name }}</span>
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