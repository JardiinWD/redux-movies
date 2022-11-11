
// Import CreateSlice from Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from '../../common/apis/movieApiKey'

// Function that allowed me to fetch movies
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    // Create the variable Text for the dynamic query
    const movieText = "Harry"
    // Take the response from axios
    // &s=${movieText} => Movie title to search for
    // &type=movie` => Type of result to return (It can be a movie, serie etc)
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((error) => console.log(error))
    return response.data
})

// Create the initialState object
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
    // The extraReducer for the asyncThunk
    extraReducers: {
        // When the fetchAsyncMovies fn is pending
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        // When the fetchAsyncMovies get the result
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, movies: payload }
        },
        // When the fetchAsyncMovies call is rejected
        [fetchAsyncMovies.rejected]: () => {
            console.error("Rejected");
        },
    }
})

// Export my addMovies fn
export const { addMovies } = movieSlice.actions
// Esport the getAllMovies fn
export const getAllMovies = (state) => state.movies.movies
// Export my Slicer as movieSlice.reducer
export default movieSlice.reducer