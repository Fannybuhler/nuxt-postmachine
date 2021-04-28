<template>
  <main class="news-body">
    <h1 class="page-title">
      Space News
    </h1>
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
    }
  },

  async fetch() {
    const query = this.$route.query
    const spaceEndpoint = 'http://postmachine-api-master.herokuapp.com/api/posts/en/space'
    this.page = query.page ? parseInt(query.page) : 1
    const take = 10
    const skip = (take * this.page) - take

    const response = await fetch(`${spaceEndpoint}?take=${take}&skip=${skip}`)
    .then ((res) => res.json())

    this.posts = response.posts
    this.total = Math.ceil(response.maxTotal / take)
  },

  watch: {
    '$route.query': '$fetch'
  },
}
</script>

<style>

</style>
