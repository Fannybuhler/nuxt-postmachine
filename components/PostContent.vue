<template>
  <div class="layout">
    <div class="post-media">
      <img class="post-media__image" :src="post.image">
      <div class="post-media__cover" :style="{ 'background-image': `url(${post.image})` }"></div>
    </div>
    <div class="post-content">
      <div class="post-content__main">
        <p>Summary: {{post.summary}}</p> 
      </div>
      <a class="post-content__link" :href="post.originalUrl" target="_blank" rel="noopener nofollow noreferrer">Full story at {{post.source}}</a>
    </div>
    <ul> 
      <li class="post-content__item" v-for="tag of post.tags" :key="tag">
        {{ tag }}
      </li>
    </ul>
  </div>
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

<style lang="scss">
  .layout {
    margin-bottom: 2rem;
  }

  .post-media {
    margin-left: 0;
    margin-right: 0;
    border-radius: .375rem;
    margin-bottom: 1rem;
    position: relative;
    background-color: rgba(17,17,17,1);
    overflow: hidden;
  
    &__image {
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 10;
      max-width: 600px;
      width: 100%;
      height: auto;
      display: block;
    }

    &__cover {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      opacity: .2;
    }
  }

  .post-content {
    &__main {
      font-size: 20px;
      line-height: 30px;
    }

    &__link {
      font-size: 16px;
      line-height: 19px;
      font-weight: 900;
      display: inline-block;
      font-weight: 700;
      margin-top: 1rem;
      text-decoration: underline;
      text-decoration-color: #217ac8;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    &__item {
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 14px;
      display: inline-flex;
      margin-top: .5rem;
      margin-right: .5rem;
      color: #217ac8;
      background-color: rgba(244,244,244,1);
      padding: .25rem .5rem;
      border-radius: 9999px;
      font-size: 14px;
      text-transform: capitalize;
    }
  }

  @media (max-width: $tablet) {
      .post-content {
      &__main {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  
</style>