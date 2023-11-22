import { createSlice } from '@reduxjs/toolkit'

export const ImageStatsSlice = createSlice({
    name: 'imageStats',
    initialState: {
        downloads: null,
        downloadsLastThirty: null,
        likes: null,
        views: null,
        viewsLastThirty: null,
    },
    reducers: {
      setStats: (state, action) => {
        state.downloads = action.payload.downloads.total,
        state.downloadsLastThirty = action.payload.downloads.historical.change,
        state.likes = action.payload.likes.total,
        state.views = action.payload.views.total,
        state.viewsLastThirty = action.payload.views.historical.change
    },
  },
})
export const { setStats } = ImageStatsSlice.actions
export const selectImageStats = (state) => {
    return {
        downloads: state.imageStats.downloads,
        downloadsLastThirty: state.imageStats.downloadsLastThirty,
        likes: state.imageStats.likes,
        views: state.imageStats.views,
        viewsLastThirty: state.imageStats.viewsLastThirty,}
  } 
  export default ImageStatsSlice.reducer