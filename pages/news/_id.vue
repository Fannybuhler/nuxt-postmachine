<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <header class="post-header">
        <h1 class="post-header__heading">
          <span>news</span>
          {{post.title}}
        </h1>
        <PostMeta :post="post"/>
      </header>
      <div class="layout__main">
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

<style lang="scss">
  .layout__main {
    float: left;
    clear: left;
    width: calc(65% - 4rem);
    margin-bottom: 2rem;
  }

  .post-header {
    &__heading {
      font-size: 40px;
      line-height: 48px;
    }

    &__heading span {
      color: rgba(255,0,0, 1);
      text-transform: uppercase;
      letter-spacing: -1px;
      font-weight: 900;
    }

    &__heading span::after {
      display: inline-block;
      padding-left: .5rem;
      color: #d4d4d4;
      content: "|";
      font-weight: 400;
    }
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
      -webkit-text-decoration-color: #217ac8;
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
</style>