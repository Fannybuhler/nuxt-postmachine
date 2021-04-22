<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>ID: {{ this.$route.params.id }}</h1>
      <h1>Title: {{ post.title }}</h1>
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