<template>
  <NuxtLink
    class="post-row"
    :to="{ name: 'newsPost', params: { id: post.id } }"
  >
    <div class="post-row__info">
      <h3 class="post-row__title">{{ post.title }}</h3>
      <PostMeta :post="post" />
      <p class="post-row__summary">{{ summary }}</p>
    </div>
    <img class="post-row__media" :src="post.image" />
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

<style lang='scss'>
.post-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 1.5rem 0px;
  width: 100%;

  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &__title {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
  }
}
</style>