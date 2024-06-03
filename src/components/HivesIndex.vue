<template>
    <section class="hive-list">
        <div v-for="hive in hives" class="hive-item">
            <div class="hive-info">
                <span class="hive-info-name">{{ hive.name }}</span>
                <span class="hive-info-weight">Poids : {{ hive.weight }} kg</span>
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
    .hive-list {
        max-height: 400px;
        overflow: scroll;
        padding-top: 10px;
        border-top: 2px solid #88e0e7;
    }

    .hive-item {
        border: 2px solid #b6e0f6;
        background-color: #edf7fd;
        border-radius: 2px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .hive-info {
        display: flex;
        flex-direction: column;
    }

    .hive-info-name {
        font-size: 1.3em;
    }

    .hive-controls {
        display: flex;
        align-items: center;
    }

    .hive-detail-link {
        text-decoration: underline;
    }
</style>