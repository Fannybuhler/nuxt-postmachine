<template>
  <nav class="navbar">
    <NuxtLink :to="{ name: 'start' }">Start</NuxtLink>
    <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
    <NuxtLink :to="{ name: 'newsList' }">News</NuxtLink>
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
</style>

