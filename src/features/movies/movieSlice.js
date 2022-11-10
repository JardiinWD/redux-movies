
// Import CreateSlice from Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {}, // Movies Declare as an empty Objec
}

const movieSlice = createSlice({
    name: "movies", // Name of the createSlice
    initialState, // The initial State Object
    // The reducer Obj
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
})

// Export my addMovies fn
export const { addMovies } = movieSlice.actions
// Esport the getAllMovies fn
export const getAllMovies = (state) => state.movies.movies
// Export my Slicer as movieSlice.reducer
export default movieSlice.reducer