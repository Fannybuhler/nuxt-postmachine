
<template>
  <div>
    <h1 class="page-title">Nuxt posts</h1>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul>
        <li v-for="post of posts" :key="post.id">
          <NuxtLink :to="`/news/${post.id}`">
            {{ post.id }}. {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="button-wrapper">
        <button :disabled="page === 1" class="pagination-button" @click="prevPage()">Prev page</button>
        <p>{{ page }} / {{ total }}</p>
        <button :disabled="page === total" class="pagination-button" @click="nextPage()">Next page</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const query = this.$route.query
    return {
      posts: [],
      page: query.page ? parseInt(query.page) : 1,
      total: null
    }
  },

  async fetch() {
    const take = 10
    const skip = (take * this.page) - take
    
    console.log('page: ', this.page)
    
    const response = await fetch(
      `http://postmachine-api-master.herokuapp.com/api/posts/en/crime?take=${take}&skip=${skip}`
    ).then((res) => res.json())

    this.posts = response.posts
    this.total = Math.ceil(response.maxTotal / take)
  },

  watch: {
    '$route.query': '$fetch'
  },

  methods: {
    prevPage() {
      this.page--
      this.$router.push({ path: `/news?page=${this.page}` })
    },
    nextPage() {
      this.page++
      this.$router.push({ path: `/news?page=${this.page}` })
    },
  }
}
</script>

<style>
  .page-title {
   margin: 2rem; 
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination-button {
    margin: 1rem 0.5rem;
    padding: 5px;
  }
</style>