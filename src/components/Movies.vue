<script>
export default {
  name: "Movies",
  data() {
    return {
      movies: [
        {
          title: 'Twister',
          year: 1996,
          location: 'USA',
          image: 'twister',
          description: 'In Twister, Bill and Jo Harding, advanced storm chasers on the brink of divorce, must join together to create an advanced...',
        },
        {
          title: 'Geostorm',
          year: 2017,
          location: 'USA',
          image: 'geostorm',
          description: 'Geostorm is a sci-fi thriller starring Gerard Butler as satellite designer Jake Lawson who discovers a problem with an...',
        },
        {
          title: 'The Day After Tomorrow',
          year: 2004,
          location: 'USA, UK',
          image: 'day-after-tomorrow',
          description: 'The Day After Tomorrow depicts the cataclysmic effects of global climate change as a series of extreme weather events unfold...',
        },
        {
          title: 'Greenland',
          year: 2020,
          location: 'USA',
          image: 'greenland',
          description: 'Greenland is a 2020 thriller directed by Ric Roman Waugh and written by Chris Sparling. Starring Gerard Butler, Scott Glenn...',
        },
      ]
    }
  },
  methods: {
     getImageUrl(name) {
       return new URL(`../assets/img/${name}.jpg`, import.meta.url).href
      }
    }
 }
</script>

<template>
  <div class="h-100p" id="movies"></div>
  <h5 class="px-2 py-4">Movies Weather</h5>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="movie in movies" :key="movie.title">
        <div class="card">
          <img :src="getImageUrl(movie.image)" class="card-img-top" :alt="movie.title">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.location }} - {{ movie.year }} | {{ movie.description }}</p>
            <a href="#" class="btn btn-primary">Discover more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>