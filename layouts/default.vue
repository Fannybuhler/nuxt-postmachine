<template>
  <div>
    <AppHeader />
    <div id="pageWrap">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
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

#pageWrap {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 3rem;
}

hr {
  margin-bottom: 2rem;
}

.page-title {
   margin-top: 2rem;

   &__subheading {
     margin: 1rem 0;

     &__links {
        font-style: italic;
      }
    }
  }

@media (min-width: $desktop) {
  .layout {
    display: block;

    &__main {
      float: left;
      clear: left;
      width: calc(65% - 4rem);
    }

    &__side {
      margin-left: 4rem;
      display: inline-block;
      width: 35%;
    }
  }
}

@media (max-width: $tablet) {
  h3 {
    font-size: 28px;
    line-height: 34px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
}

</style>
