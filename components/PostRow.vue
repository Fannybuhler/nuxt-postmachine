<template>
  <NuxtLink class="post-row" :to="`/news/${post.id}`">
    <div class="post-row__info">
      <h3 class="post-row__title">{{ post.title }}</h3>
      <div class="post-row__meta">
        <div class="post-row__meta-item">
          <time>{{ publishedAt }}</time>
        </div>
        <div class="post-row__meta-item">
          <p>{{ post.comments }} comments</p>
        </div>
      </div>
      <p class="post-row__summary">{{ post.summary }}</p>
    </div>
    <img class="post-row__media" :src="post.image" />
  </NuxtLink>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      publishedAt: moment(this.post.date).format('YYYY-MM-DD HH:mm')
    }
  },

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


  .post-row__meta {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    color: #666;
    margin: 0.5rem 0;
  }

  .post-row__meta-item {
    margin-right: 1.5rem;
  }

  .post-row__media {
    margin-left: 1rem;
    width: 160px;
    flex-shrink: 0;
    border-radius: .375rem;
    overflow: hidden;
  }
</style>