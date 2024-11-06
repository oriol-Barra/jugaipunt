<template>
  <div class="default-background">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.default-background {
  position: relative;
  background-image: url('/assets/default_background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
</style>
