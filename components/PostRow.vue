<template>
  <NuxtLink class="post-row" :to="`/news/${post.id}`">
    <div class="post-row__info">
      <h3 class="post-row__title">{{ post.title }}</h3>
      <PostMeta :post="post" />
      <p class="post-row__summary">{{ post.summary }}</p>
    </div>
    <img class="post-row__media" :src="post.image" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style> 
  .post-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 1.5rem 0px;
    width: 100%
  }

  .post-row__title {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
  }

  .post-row__info {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>