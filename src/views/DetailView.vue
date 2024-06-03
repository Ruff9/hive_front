<template>
    <main class="content-wrapper">
        <div class="content-container">
            <h1 class="main-title">Détails</h1>
            <router-link to="/" class="back-to-home-link">Retour accueil</router-link>

            <div class="hive-info">
                <div class="hive-detail-name">{{ hive.name }}</div>
                <div class="hive-detail-weight">Poids : {{ hive.weight }} kg</div>
                <div class="hive-detail-description">{{ hive.description }}</div>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios'
    import { useRoute } from 'vue-router'

    export default {
        data() {
            return {
                hive: ['']
            }
        },
        methods: {
            async getData(id) {
                try {
                    const path = import.meta.env.VITE_BACKEND_URL + '/hives/' + id;
                    const response = await axios.get(path);
                    this.hive = response.data;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        created() {
            const route = useRoute()
            this.getData(route.params.id);
        }
    }
</script>

<style>
    .back-to-home-link {
        display: block;
        text-decoration: underline;
        margin-bottom: 20px;
    }

    .hive-detail-name {
        font-size: 1.5em;
        margin-bottom: 5px;
    }

    .hive-detail-weight {
        margin-bottom: 20px;
    }
</style>