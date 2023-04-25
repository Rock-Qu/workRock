import {configureStore} from '@reduxjs/toolkit';
import productRedux from "./redux";

const store = configureStore({reducer : productRedux});

export default store;