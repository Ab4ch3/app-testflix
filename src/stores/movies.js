import { defineStore } from 'pinia'
import axios from 'axios'

// const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export const useMovieStore = defineStore('movies', {
  state: () => ({
    FeaturedMovies: []
  }),
  getters: {
    /*  getBackgroundFeatured(state) {
      let movie = this.FeaturedMovies[Math.floor(Math.random() * state.FeaturedMovies.length)]
      console.log(movie.backdrop_path)
      // let response = fetch(`${IMAGE_URL}${movie.backdrop_path}`)
      return movie
    } */
  },
  actions: {
    async getFeaturedMovie() {
      // let loading = true
      let API_PROVIDER_FEATURED =
        'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'
      let response = await axios.get(API_PROVIDER_FEATURED)
      let data = await response.data.results
      return (this.FeaturedMovies = data)
    }
  }
})
