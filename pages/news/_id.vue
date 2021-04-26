<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <header class="post-header">
        <h1 class="post-header__heading">
          <span>NEWS</span>
          {{post.title}}
        </h1>
      </header>
      <PostMeta :post="post"/>

      <p>Summary: {{post.summary}}</p> 
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      post: {},
    }
  },
  async fetch() {
    const id = this.$route.params.id

    const response = await fetch(
      `http://postmachine-api-master.herokuapp.com/api/post/en/${id}`
    ).then((res) => res.json())

    this.post = await response.post
  },
}
</script>