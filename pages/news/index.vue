
<template>
  <p v-if="$fetchState.pending">Fetching posts...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt posts</h1>
    <ul>
      <li v-for="post of posts" :key="post.title">
        <NuxtLink :to="`/news/${post.id}`">
          {{ post.id }}. {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then((res) => res.json())
  },
}
</script>