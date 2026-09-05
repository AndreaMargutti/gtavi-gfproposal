<script setup lang="ts">
import BackGround from './components/BackGround.vue'
import AppTitle from './components/AppTitle.vue'
</script>

<template>
  <BackGround />
  <div class="wrapper">
    <AppTitle title="GTA VI Proposal" />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-block: 3rem;
}
</style>
