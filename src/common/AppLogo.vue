<template>
  <div class="app-logo">
    <img
      class="app-logo__img"
      src="/branding/logo.svg"
      :alt="$config.APP_NAME"
    />
    <router-link class="app-logo__link" :to="{ name: $routes.main }" />
  </div>
</template>

<style lang="scss" scoped>
.app-logo {
  width: toRem(40);
  display: flex;
  flex-direction: column;
  position: relative;
}

.app-logo__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
