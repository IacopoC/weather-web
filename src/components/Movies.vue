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
          duration:'1h 53min',
          imdb_link:'tt0117998',
        },
        {
          title: 'Geostorm',
          year: 2017,
          location: 'USA',
          image: 'geostorm',
          duration:'1h 49min',
          imdb_link:'tt1981128',
        },
        {
          title: 'The Day After Tomorrow',
          year: 2004,
          location: 'USA, UK',
          image: 'day-after-tomorrow',
          duration:'2h 4min',
          imdb_link:'tt0319262',
        },
        {
          title: 'Greenland',
          year: 2020,
          location: 'USA',
          image: 'greenland',
          duration:'1h 59min',
          imdb_link:'tt7737786',
        },
        {
          title: 'Into the Storm',
          year: 2014,
          location: 'USA',
          image: 'into-the-storm',
          duration:'1h 29min',
          imdb_link:'tt2106361',
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
  <div class="h-100p" id="weathermovies"></div>
  <h5 class="px-2 pt-4">Weather Movies</h5>
  <p class="px-2 pb-4">A selection of movies about weather of different genres.</p>
  <div class="container">
    <div class="row">
      <div class="col-lg" v-for="movie in movies" :key="movie.title">
        <div class="card">
          <img :src="getImageUrl(movie.image)" class="card-img-top" :alt="movie.title">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.location }} - {{ movie.year }} | {{ movie.duration }}</p>
            <a :href="'https://www.imdb.com/title/' + movie.imdb_link + '/'" class="btn btn-primary">About the Movie <i class="bi bi-box-arrow-up-right p-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>