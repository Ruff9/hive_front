<template>
    <section class="hive-list">
        <div v-for="hive in hives" class="hive-item">
            <div class="hive-info">
                <span>{{ hive.name }}</span>
                <span>{{ hive.weight }} kg</span>
            </div>
            <div v-if="hive" class="hive-controls">
                <router-link :to="{ name: 'details', params: { id: hive.id }}" class="hive-detail-link">Voir détails</router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['hives']
    }
</script>

<style>
    .hive-item {
        border: 2px solid blueviolet;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        padding: 5px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .hive-info {
        display: flex;
        flex-direction: column;
    }

    .hive-detail-link {
        text-decoration: underline;
    }
</style>