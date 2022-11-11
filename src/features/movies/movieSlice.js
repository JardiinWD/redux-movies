
// Import CreateSlice from Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from '../../common/apis/movieApiKey'

// Function that allowed me to fetch movies
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    // Take the response from axios
    // &s=${movieText} => Movie title to search for
    // &type=movie` => Type of result to return (It can be a movie, serie etc)
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`).catch((error) => console.log(error))
    return response.data
})

// Function that allowed me to fetch Series
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    // Take the response from axios
    // &s=${seriesText} => Serie title to search for
    // &type=series` => Type of result to return (It can be a movie, serie etc)
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`).catch((error) => console.log(error))
    return response.data
})

// Function that allowed me to fetch A movie or a serie
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    // Take the response from axios
    // &i=${id}$Plot=full => Return the plot of the serie/movie, filtered by id
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`).catch((error) => console.log(error))
    return response.data
})

// Create the initialState object
const initialState = {
    movies: {}, // Movies Declare as an empty Object
    shows: {}, // Series Declare as an empty Object
    selectMovieOrShow: {} // Filtered movie or serie Declare as an empty Object
}

const movieSlice = createSlice({
    name: "movies", // Name of the createSlice
    initialState, // The initial State Object
    // The reducer Obj
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
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
        // When the fetchAsyncShows get the result
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, shows: payload }
        },
        // When the fetchAsyncMovieOrShowDetail get the result
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, selectMovieOrShow: payload }
        },

        // When the fetchAsyncMovies call is rejected
        [fetchAsyncMovies.rejected]: () => {
            console.error("Rejected");
        },
    }
})

// Export my addMovies fn
export const { removeSelectedMovieOrShow } = movieSlice.actions
// Export the getAllMovies fn
export const getAllMovies = (state) => state.movies.movies
// Export the getAllShows fn
export const getAllShows = (state) => state.movies.shows
// Export the getAllMovieOrShowDetail fn
export const getAllMovieOrShowDetail = (state) => state.movies.selectMovieOrShow
// Export my Slicer as movieSlice.reducer
export default movieSlice.reducer