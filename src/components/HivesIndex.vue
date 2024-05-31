<template>
    <section class="hive-list">
        <div v-for="hive in hives" class="hive-item">
            <span>{{ hive.name }}</span>
            <span>{{ hive.weight }} kg</span>
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
        flex-direction: column;
        padding: 5px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
</style>