<script setup>
import HivesIndex from '../components/HivesIndex.vue'
import HiveCreationForm from '../components/HiveCreationForm.vue'
</script>

<template>
  <main class="content-wrapper">
    <div class="content-container">
      <h1 class="main-title">Accueil</h1>
      <HiveCreationForm @add-hive="(h) => hives.push(h)"/>
      <HivesIndex :hives="hives"/>
    </div>
  </main>
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
      }
    },
    created() {
        this.getData();
    }
}
</script>