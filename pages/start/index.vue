<template>
  <main class="news-body">
    <h1 class="page-title">
      Trending News
    </h1>
    <p class="page-title__subheading">Welcome to Postmachine! These are the most commented and liked articles under the categories
      <NuxtLink class="page-title__subheading__links" :to="{ name: 'newsListScope', params: { scope: 'crime' }}">Crime News, </NuxtLink>
      <NuxtLink class="page-title__subheading__links" :to="{ name: 'newsListScope', params: { scope: 'fashion' } }">Fashion News, </NuxtLink> and
      <NuxtLink class="page-title__subheading__links" :to="{ name: 'newsListScope', params: { scope: 'space' } }"> Space News.</NuxtLink>
    </p>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else class="layout">
      <div class="layout__main">
        <h2 class="category-title">Space Articles</h2>
        <ul>
          <li v-for="post, index in spacePosts" :key="post.id">
            <PromotedPost v-if="index === 0" :post="post" />
            <PostRow v-else :post="post" />
          </li>
        </ul>
        <hr />
        <h2 class="category-title">Fashion Articles</h2>
        <ul>
          <li v-for="post, index in fashionPosts" :key="post.id">
            <PromotedPost v-if="index === 0" :post="post" />
            <PostRow v-else :post="post" />
          </li>
        </ul>
        <hr />
        <h2 class="category-title">Crime Articles</h2>
        <ul>
          <li v-for="post, index in crimePosts" :key="post.id">
            <PromotedPost v-if="index === 0" :post="post" />
            <PostRow v-else :post="post" />
          </li>
        </ul>
      </div>
      <div class="layout__side layout__latest-list">
        <h2>Latest News</h2>
        <LatestPosts :posts="latest" />
      </div>
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
      latest: []
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
    
    const latestPosts = [...responseSpace.posts.latest, ...responseFashion.posts.latest, ...responseCrime.posts.latest]

    this.latest = latestPosts.sort((a,b) => {
      return new Date(b.date) - new Date(a.date)
    }).slice(0, 6)
  }
}
</script>

