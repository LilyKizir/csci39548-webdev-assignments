import { configureStore } from '@reduxjs/toolkit';
import  PictureDataReducer  from './RandomPictureDataSlice';
import ImageStatsReducer from './RandomImageStatsSlice';
import UserDataReducer from './RandomUserDataSlice'
export default configureStore({
    reducer: {
      pictureData: PictureDataReducer,
      imageStats: ImageStatsReducer,
      userData: UserDataReducer,
    },
  });