import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const server = axios.create({
  baseURL: 'http://localhost:2403/',
  responseType: 'json'
});


const options = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({ getState, dispatch }, config) => {
        // Request interception
        return config
      }
    ],
    response: [
      {
        success: ({ dispatch }, response) => {
          // Response interception
          return response
        },
        error: ({ dispatch }, error) => {
          // Response Error Interception
          return Promise.reject(error)
        }
      }
    ]
  }
};

export default function configStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(axiosMiddleware(server, options)))
  );
}
