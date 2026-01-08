import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSong: null,
  isPlaying: false,
  genre: 'POP',
  theme: 'dark',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
      state.isPlaying = true;
    },
    playPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const {
  setActiveSong,
  playPause,
  setGenre,
  toggleTheme,
} = playerSlice.actions;

export default playerSlice.reducer;
