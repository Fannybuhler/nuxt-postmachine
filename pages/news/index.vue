
<template>
  <main class="news-body">
    <h1 class="page-title">Nuxt posts</h1>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul>
        <li v-for="post of posts" :key="post.id">
          <PostRow :post="post" />
        </li>
      </ul>
      <Pagination :pTotal="total" :pPage="page" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      page: null,
      total: null
    }
  },

  async fetch() {
    const query = this.$route.query
    this.page = query.page ? parseInt(query.page) : 1
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
  }
}
</script>

<style>
  .page-title {
   margin: 2rem 0; 
  }

  .news-body {
    margin: 0 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>