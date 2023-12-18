import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./reducers/profile";

export default configureStore({
    reducer: {
      profile:profileSlice.reducer
  }
});