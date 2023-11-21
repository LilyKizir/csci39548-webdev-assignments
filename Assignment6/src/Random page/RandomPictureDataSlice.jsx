import { createSlice } from '@reduxjs/toolkit'

export const PictureDataSlice = createSlice({
    name: 'pictureData',
    initialState: {
      title: null,
      url: null,
      explanation: null,
      username: null,
      userLink: null,
    },
    reducers: {
      setPicture: (state, action) => {
        state.title = action.payload.alt_description,
        state.url = action.payload.urls.regular,
        state.explanation = action.payload.description,
        state.username = "Picture by: " + action.payload.user.name,
        state.userLink = action.payload.user.links.html
    },
  },
})

export const { setPicture } = PictureDataSlice.actions
export const selectPictureData = (state) => {
  return {
    title : state.pictureData.title, 
    url: state.pictureData.url, 
    explanation: state.pictureData.explanation, 
    username: state.pictureData.username,
    userLink: state.pictureData.userLink}
} 
export default PictureDataSlice.reducer