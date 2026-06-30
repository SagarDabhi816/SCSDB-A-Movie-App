import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null,
}

export const movieSlice = createSlice({
   name:"movie",
   initialState,
   reducers:{
    loadmovie:(state,action) =>{
        state.info = action.payload;
    },
    removemovie:(state,action) =>{
        state.info = null
    },
    setMovieDetails(state, action) {
   const movie = action.payload;

   state.movieDetails[movie.id] = movie;
}
   }
  })
  
  export const { loadmovie , removemovie , setMovieDetails } = movieSlice.actions
  
  export default movieSlice.reducer