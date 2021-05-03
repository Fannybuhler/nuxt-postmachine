<template>
  <nav class="navbar">
    <NuxtLink :to="{ name: 'start' }">
      <div class="nav-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M299.429 488.563C294.286 507.573 274.858 512 256 512c-18.857 0-38.286-4.427-43.428-23.437C204.927 460.134 192 388.898 192 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM144 232c0-61.19 48.953-110.852 109.88-111.98 61.961-1.147 114.04 49.862 114.12 111.833.035 27.659-9.892 53.792-28.077 74.313-1.843 2.08-2.077 5.144-.48 7.418 5.296 7.541 8.981 16.176 10.931 25.69.947 4.623 6.573 6.453 10.003 3.211 29.469-27.847 47.806-67.348 47.623-111.136-.352-84.131-69.885-152.428-154.01-151.337C170.968 81.09 104 148.724 104 232c0 43.523 18.297 82.768 47.614 110.476 3.434 3.246 9.064 1.427 10.013-3.203 1.949-9.514 5.635-18.149 10.931-25.69 1.596-2.272 1.365-5.335-.477-7.413C153.926 285.685 144 259.607 144 232zM256.503.001C126.406-.271 21.207 103.688 20.01 233.78c-.902 98.093 58.054 182.512 142.555 218.984 4.388 1.894 9.108-1.9 8.253-6.602a985.559 985.559 0 01-5.517-33.559 6.014 6.014 0 00-3.088-4.407C102.605 375.626 60 311.84 60 236c0-108.321 87.662-196 196-196 108.321 0 196 87.661 196 196 0 74.634-41.538 139.051-102.213 172.196a6.01 6.01 0 00-3.088 4.406 986.377 986.377 0 01-5.517 33.559c-.855 4.703 3.866 8.496 8.255 6.602C433.298 416.566 492 333.145 492 236 492 105.828 386.611.272 256.503.001zM256 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"></path>
        </svg>
      </div>
      Trending
    </NuxtLink>
    <NuxtLink :to="{ name: 'latest' }">
      <div class="nav-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M416 224V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64 64v54.2c0 8 9.1 12.6 15.5 7.8l82.8-62.1H352c35.3.1 64-28.6 64-63.9zm96-64h-64v64c0 52.9-43.1 96-96 96H192v64c0 35.3 28.7 64 64 64h125.7l82.8 62.1c6.4 4.8 15.5.2 15.5-7.8V448h32c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z"></path>
        </svg>
      </div>
      Latest
    </NuxtLink>
    <NuxtLink :to="{ name: 'newsListScope', params: { scope: 'crime' }}">Crime</NuxtLink>
    <NuxtLink :to="{ name: 'newsListScope', params: { scope: 'fashion' } }">Fashion</NuxtLink>
    <NuxtLink :to="{ name: 'newsListScope', params: { scope: 'space' } }">Space</NuxtLink>
  </nav>
</template>

<script>
export default {
  // name: 'AppHeader'
}
</script>

<style lang="scss">
  .navbar {
    background: #fafafa;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  } 

  .nav-icon {
    width: 1.5rem;
    height: 1.5rem;
    fill: inherit;
    margin: 0 auto .25rem;
    transition: fill .3s ease;
  }

  .router-link-exact-active {
    color: $primary-green;
  }
  
  .router-link-exact-active > .nav-icon {
    fill: $primary-green;

    &__tick {
      opacity: 1;
      background: $primary-green;
    }
  }
</style>

