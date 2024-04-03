import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    active: false,
  },
  reducers: {
    activeNav: (state) => {
      state.active = true
    },
    disActiceNav: (state) => {
      state.active = false
    },
  },
})

export const { activeNav, disActiceNav } = navSlice.actions
export default navSlice.reducer
