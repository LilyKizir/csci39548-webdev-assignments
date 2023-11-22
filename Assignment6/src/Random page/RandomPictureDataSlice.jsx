import { createSlice } from '@reduxjs/toolkit'

export const PictureDataSlice = createSlice({
  name: 'pictureData',
  initialState: {
    title: null,
    url: null,
    explanation: null,
    displayname: null,
    username: null,
    userLink: null,
    id: null,
  },
  reducers: {
    setPicture: (state, action) => {
      state.title = action.payload.alt_description,
      state.url = action.payload.urls.regular,
      state.explanation = action.payload.description,
      state.displayname = "Picture by: " + action.payload.user.name,
      state.username = action.payload.user.username,
      state.userLink = action.payload.user.links.html
      state.id = action.payload.id
  },
},
})

export const { setPicture } = PictureDataSlice.actions
export const selectPictureData = (state) => {
  return {
    title : state.pictureData.title, 
    url: state.pictureData.url, 
    explanation: state.pictureData.explanation,
    displayname: state.displayname, 
    username: state.pictureData.username,
    userLink: state.pictureData.userLink,
    id: state.pictureData.id
  }
} 
export default PictureDataSlice.reducer