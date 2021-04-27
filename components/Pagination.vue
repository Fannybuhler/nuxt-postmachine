<template>
  <div class="button-wrapper">
    <button :disabled="page === 1" class="pagination-button" @click="prevPage()">Prev page</button>
    <p>{{ page }} / {{ total }}</p>
    <button :disabled="page === total" class="pagination-button" @click="nextPage()">Next page</button>
  </div>
</template>

<script>
export default {
  props: {
    pPage: {
      type: Number,
      default: null
    },
    pTotal: {
      type: Number,
      default: null
    },
    parentSlug: {
      type: String,
      default: '/'
    }
  },

  data() {
    return {
      page: this.$props.pPage,
      total: this.$props.pTotal
    }
  },

  methods: {
    prevPage() {
      window.scroll(0, 0)
      this.page--
      this.$router.push({ path: `${this.$props.parentSlug}?page=${this.page}` })
    },
    nextPage() {
      window.scroll(0, 0)
      this.page++
      this.$router.push({ path: `${this.$props.parentSlug}?page=${this.page}` })
    }
  }  
}
</script>

<style>
    .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination-button {
    margin: 1rem 0.5rem;
    padding: 5px;
  }
</style>