
<template>
  <main class="news-body">
    <h1 class="page-title">{{ title }}</h1>
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
      total: null,
      title: null
    }
  },

  async fetch() {
    const scope = this.$route.params.scope || this.$route.meta.scope 
    const query = this.$route.query
    const crimeEndpoint = `http://postmachine-api-master.herokuapp.com/api/posts/en/${scope}`
    this.page = query.page ? parseInt(query.page) : 1
    const take = 10
    const skip = (take * this.page) - take
    
    const response = await fetch(
      `${crimeEndpoint}?take=${take}&skip=${skip}`
    ).then((res) => res.json())

    this.title = scope + ' news'
    this.posts = response.posts
    this.total = Math.ceil(response.maxTotal / take)
  },

  watch: {
    '$route.query': '$fetch'
  },

  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style>
  .page-title {
   margin: 2rem 0; 
   text-transform: capitalize;
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