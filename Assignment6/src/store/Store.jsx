import { configureStore } from '@reduxjs/toolkit';
import  PictureDataReducer  from './PictureDataSlice';
import ImageStatsReducer from './ImageStatsSlice';
import UserDataReducer from './UserDataSlice'
export default configureStore({
    reducer: {
      pictureData: PictureDataReducer,
      imageStats: ImageStatsReducer,
      userData: UserDataReducer,
    },
  });