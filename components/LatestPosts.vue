<template>
  <div v-if="posts.length" class="latest-post">
    <ul>
      <li v-for="post of posts" :key="post.id">
        <NuxtLink :to="{ name: 'newsPost', params: { id: post.id } }">
          <h3 class="latest-post__title"> {{post.title}} </h3>
          <PostMeta :post="post" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .latest-post {
    display: flex;
    flex-direction: row;

    &__title {
      font-size: 18px;
      margin-top: 1rem; 
    }
  }
</style>