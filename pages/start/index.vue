<template>
  <main class="news-body">
    <h1 class="page-title">
      Trending News
    </h1>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul>
        <li v-for="post, index of latest" :key="post.id">
          {{ index+1 }}. {{ post.date }}
        </li>
      </ul>
      <ul>
        <li v-for="post of spacePosts" :key="post.id">
          <PostRow :post="post" />
        </li>
      </ul>
      <hr />
      <ul>
        <li v-for="post of fashionPosts" :key="post.id">
          <PostRow :post="post" />
        </li>
      </ul>
      <hr />
      <ul>
        <li v-for="post of crimePosts" :key="post.id">
          <PostRow :post="post" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      spacePosts: [],
      fashionPosts: [],
      crimePosts: [],
      latest: null
    }
  },

  async fetch() {
    const endpoint = 'https://postmachine-api-master.herokuapp.com/api/promoted-posts/en'

    const responseSpace = await fetch(`${endpoint}/space`)
    .then ((res) => res.json())

    const responseFashion = await fetch(`${endpoint}/fashion`)
    .then ((res) => res.json())

    const responseCrime = await fetch(`${endpoint}/crime`)
    .then ((res) => res.json())

    this.spacePosts = responseSpace.posts.trending.slice(0, 3)
    this.fashionPosts = responseFashion.posts.trending.slice(0, 3)
    this.crimePosts = responseCrime.posts.trending.slice(0, 3)
    
    const latestPosts = [ ...responseSpace.posts.latest, ...responseFashion.posts.latest, ...responseCrime.posts.latest ]
    
    this.latest = latestPosts.sort((a,b) => {
      return new Date(b.date) - new Date(a.date)
    }).slice(0,3)
  },
}
</script>

