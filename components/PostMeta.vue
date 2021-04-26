<template>
  <div class="post-row__meta">
        <div class="post-row__meta-item">
          <time>{{ publishedAt }} ago</time>
        </div>
        <div class="post-row__meta-item">
          {{ post.comments }} comments
        </div>
      </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      publishedAt: moment(this.post.date).toNow(true)
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
  .post-row__meta {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    color: #666;
    margin: 0.5rem 0;
  }

  .post-row__meta-item:nth-child(n+2):before{
    display: inline-block;
    padding-left: .8rem;
    padding-right: .5rem;
    content: "·";
  }

  .post-row__media {
    margin-left: 1rem;
    width: 160px;
    height: auto;
    flex-shrink: 0;
    border-radius: .375rem;
    overflow: hidden;
  }
</style>