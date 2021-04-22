<template>
  <nav class="navbar">
    <NuxtLink to="/">Start</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/news">News</NuxtLink>
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

