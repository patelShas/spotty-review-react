import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import reviewsReducer from "./reviews/processing/reviews-reducer";
import { configureStore } from '@reduxjs/toolkit';
import detailReducer from "./details/processing/detail-reducer";
import albumSearchReducer from "./search/processing/search-reducer"
import usersReducer from "./users/processing/users-reducer";
const store = configureStore({
    reducer: {reviewData: reviewsReducer, details: detailReducer, searchResults: albumSearchReducer, user: usersReducer}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
