<template>
  <main class="news-body">
    <h1 class="page-title">
      Latest News
    </h1>
    <p class="page-title__subheading">Get daily updates and the latest news from the categories 
      <NuxtLink class="page-title__subheading__links" :to="{ name: 'newsListScope', params: { scope: 'crime' }}">Crime News, </NuxtLink>
      <NuxtLink class="page-title__subheading__links" :to="{ name: 'newsListScope', params: { scope: 'fashion' } }">Fashion News, </NuxtLink> and
      <NuxtLink class="page-title__subheading__links" :to="{ name: 'newsListScope', params: { scope: 'space' } }"> Space News.</NuxtLink>
    </p>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul>
        <li v-for="post of latest" :key="post.id">
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
    
    const latestPosts = [ ...responseSpace.posts.latest, ...responseFashion.posts.latest, ...responseCrime.posts.latest ]
    
    this.latest = latestPosts.sort((a,b) => {
      return new Date(b.date) - new Date(a.date)
    }).slice(0,10)
  },
}
</script>

