import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import albumReducer from "./reducers/album-reducer";
import reviewsReducer from "./reviews/processing/reviews-reducer";
import { configureStore } from '@reduxjs/toolkit';
import whoReducer from "./reducers/who-reducer";
const store = configureStore({
<<<<<<< HEAD
    reducer: {albums : albumReducer, reviewData: reviewsReducer}
=======
    reducer: {who : whoReducer, albums : albumReducer, reviews: reviewsReducer}
>>>>>>> ee0066d44d95eb3ff56e9ad5c55a7602e8e84537
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
