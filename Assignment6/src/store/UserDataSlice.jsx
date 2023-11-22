import { createSlice } from '@reduxjs/toolkit'

export const UserDataSlice = createSlice({
    name: 'userData',
    initialState: {
      data: null
    },
    reducers: {
      setUser: (state, action) => {
        state.data = action.payload;
    },
  },
})

export const { setUser } = UserDataSlice.actions

export const selectUserData = (state) => state.userData.data

export default UserDataSlice.reducer