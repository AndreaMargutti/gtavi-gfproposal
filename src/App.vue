<script setup lang="ts">
import BackGround from './components/BackGround.vue'
import AppTitle from './components/AppTitle.vue'
import AppForm from './components/AppForm.vue'

const inputs = [{ name: 'Nome', type: 'text', placeholder: 'Enter your name' }]
</script>

<template>
  <BackGround />
  <div class="wrapper">
    <AppTitle title="GTA VI Proposal" />
    <AppForm :inputs="inputs" />
  </div>
</template>

<style scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-block: 3rem;
}
</style>
