<template>
<<<<<<< HEAD
  <div>
    <AppHeader />
    <slot />
  </div>
</template>
=======
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
>>>>>>> 617f78435f24004d42f23754e0c7f5dbdb9d2289
