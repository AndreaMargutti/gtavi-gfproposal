<template>
  <div class="background"></div>
</template>

<style scoped>
.background {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    135deg,
    #ff2e92 0%,
    #ff5f6d 20%,
    #ff9a3c 40%,
    #a239ea 65%,
    #2ee6d6 100%
  );
  background-size: 300% 300%;
  animation: gtaShift 15s ease infinite;
}

@keyframes gtaShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
