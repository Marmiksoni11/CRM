// store.js

import { createStore, applyMiddleware } from 'redux'; 
import createSagaMiddleware from 'redux-saga'; 
import rootReducer from 'src/reducers/rootReducer'; 
import rootSaga from 'src/sagas'; 

const sagaMiddleware = createSagaMiddleware(); // Create the saga middleware

const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware) 
);

sagaMiddleware.run(rootSaga); 

export default store;
