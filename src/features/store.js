import { configureStore } from "@reduxjs/toolkit";
// Import my slicer from moviesSlice
import moviesReducer from './movies/movieSlice'



export const store = configureStore({
    reducer: {
        // use moviesReducer as value for the movies key
        movies: moviesReducer
    }
})