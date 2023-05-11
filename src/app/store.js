import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../feature/language.slice";

export default configureStore({
  reducer: {
    language: languageReducer,
  },
});
