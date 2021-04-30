<template>
  <nav class="navbar">
    <NuxtLink :to="{ name: 'start' }">Start</NuxtLink>
    <NuxtLink :to="{ name: 'latest' }">Latest</NuxtLink>
    <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
    <NuxtLink :to="{ name: 'newsListScope', params: { scope: 'crime' }}">Crime</NuxtLink>
    <NuxtLink :to="{ name: 'newsListScope', params: { scope: 'fashion' } }">Fashion</NuxtLink>
    <NuxtLink :to="{ name: 'newsListScope', params: { scope: 'space' } }">Space</NuxtLink>
  </nav>
</template>

<script>
export default {
  // name: 'AppHeader'
}
</script>

<style>
  .navbar {
    background: thistle;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    margin-bottom: 0.5rem;
  } 

  .router-link-exact-active {
    text-decoration: underline;
  }
</style>

