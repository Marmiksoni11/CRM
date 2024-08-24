// store.js

import { legacy_createStore as createStore } from 'redux'; 
import { applyMiddleware } from 'redux'; 
import createSagaMiddleware from 'redux-saga'; 
import rootReducer from 'src/reducers/rootReducer'; 
import rootSaga from 'src/sagas'; 
import { composeWithDevTools } from "@redux-devtools/extension"
const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
  rootReducer,  
  applyMiddleware(sagaMiddleware) 
);

sagaMiddleware.run(rootSaga); 

export default store;
