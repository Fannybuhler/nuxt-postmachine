<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
// import AppHeader from '~/components/AppHeader'

export default {
  // components: {
  //   AppHeader
  // }
}
</script>

<style>
html {
  color: #000;
  font-family:
    Roboto,
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  line-height: 160%; 
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
