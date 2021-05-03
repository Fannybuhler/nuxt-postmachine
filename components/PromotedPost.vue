<template>
  <NuxtLink
    class="promoted-post"
    :to="{ name: 'newsPost', params: { id: post.id } }"
  >
    <div class="promoted-post__info">
      <img class="promoted-post__media" :src="post.image" />
      <div class="promoted-post__content">
        <h3 class="promoted-post__title">{{ post.title }}</h3>
        <PostMeta :post="post" />
        <p class="promoted-post__summary">{{ summary }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      summary: this.trimSummary(this.$props.post.summary),
    }
  },

  methods: {
    trimSummary(text, textLength = 190) {
      if (text.length <= textLength) {
        return text
      }

      return text.substring(0, textLength).trim() + '...'
    },
  },
}
</script>

<style lang="scss">
  .promoted-post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;

  &__media {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &__title {
    font-size: 32px;
    line-height: 30px;
    font-weight: 700;
  }
}
</style>