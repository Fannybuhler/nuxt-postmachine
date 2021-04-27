<template>
  <div class="post-wrapper">
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <header class="post-header">
        <h1 class="post-header__heading">
          <span class="post-header__heading-prefix">news</span>
          {{post.title}}
        </h1>
        <PostMeta :post="post"/>
      </header>
      <PostContent :post="post"/>
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
  .post-wrapper {
    margin: 0 2rem;
  }

  .post-header {
    &__heading {
      font-size: 40px;
      line-height: 48px;
    }

    &__heading-prefix {
      color: #f00;
      text-transform: uppercase;
      letter-spacing: -1px;
      font-weight: 900;

      &::after {
        display: inline-block;
        padding-left: .5rem;
        color: #d4d4d4;
        content: "|";
        font-weight: 400;
      }
    }
  }

  @media (max-width: $tablet) {
    .post-header {
    &__heading {
      font-size: 28px;
      line-height: 34px;
    }

    &__heading-prefix {
      font-size: 28px;
      line-height: 34px;

      &::after {
        font-size: 28px;
        line-height: 34px;
      }
    }
  }
  }
</style>