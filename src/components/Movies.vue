<script>
export default {
  name: "Movies",
  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'Twister',
          year: 1996,
          location: 'USA',
          image: 'twister',
          duration:'1h 53min',
          imdb_link:'tt0117998',
        },
        {
          id: 2,
          title: 'Geostorm',
          year: 2017,
          location: 'USA',
          image: 'geostorm',
          duration:'1h 49min',
          imdb_link:'tt1981128',
        },
        {
          id: 3,
          title: 'The Day After Tomorrow',
          year: 2004,
          location: 'USA, UK',
          image: 'day-after-tomorrow',
          duration:'2h 4min',
          imdb_link:'tt0319262',
        },
        {
          id: 4,
          title: 'Greenland',
          year: 2020,
          location: 'USA',
          image: 'greenland',
          duration:'1h 59min',
          imdb_link:'tt7737786',
        },
        {
          id: 5,
          title: 'Crawl',
          year: 2019,
          location: 'USA',
          image: 'crawl',
          duration:'1h 27min',
          imdb_link:'tt8364368',
        },
        {
          id: 6,
          title: 'The Perfect Storm',
          year: 2000,
          location: 'USA',
          image: 'perfect-storm',
          duration:'2h 10min',
          imdb_link:'tt0177971',
        },
        {
          id: 7,
          title: 'The Poseidon Adventure',
          year: 1972,
          location: 'USA',
          image: 'poseidon-adventure',
          duration:'1h 57min',
          imdb_link:'tt0069113',
        },
        {
          id: 8,
          title: 'The Wave',
          year: 2015,
          location: 'Sweden, Norway',
          image: 'the-wave',
          duration:'1h 45min',
          imdb_link:'tt3616916',
        },
        {
          id: 9,
          title: 'Sharknado',
          year: 2016,
          location: 'USA',
          image: 'sharknado',
          duration:'1h 26min',
          imdb_link:'tt2724064',
        },
        {
          id: 10,
          title: 'Into the Storm',
          year: 2014,
          location: 'USA',
          image: 'into-the-storm',
          duration:'1h 29min',
          imdb_link:'tt2106361',
        },
      ],
      highlightedFilmId: null,
    }
  },
  methods: {
     getImageUrl(name) {
       return new URL(`../assets/img/${name}.jpg`, import.meta.url).href
      }
    },
  computed: {
    today() {
      return new Date().getDate();
    },
    highlightedMovieIndex() {
      return (this.today - 1) % this.movies.length;
    },
    highlightedMovieId() {
      return this.movies[this.highlightedMovieIndex]?.id;
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
      <div class="col-lg-3 p-2" v-for="movie in movies" :key="movie.title" :class="{ 'bg-primary': movie.id === highlightedMovieId }">
        <div class="card">
          <img :src="getImageUrl(movie.image)" class="card-img-top" :alt="movie.title">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.location }} - {{ movie.year }} | {{ movie.duration }}</p>
            <div class="card-text">
            <p v-if="movie.id === highlightedMovieId">Suggestion of the day</p>
            <p v-else>Other suggestion</p>
              </div>
            <a :href="'https://www.imdb.com/title/' + movie.imdb_link + '/'" target="_blank" class="btn btn-primary">About the Movie <i class="bi bi-box-arrow-up-right p-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>