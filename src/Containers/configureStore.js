import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../Reducers/rootReducer";
import { ReduxMiddlewares } from "./ReduxMiddlewares/index";
import { sagaMiddleware } from './ReduxMiddlewares/sagaMiddleware';
import { watcherSaga } from './rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'persist-root', storage };
const rootPersistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootPersistReducer, {}, applyMiddleware(...ReduxMiddlewares));

const persistedStore = persistStore(store);

// Start the root saga
sagaMiddleware.run(watcherSaga);

export default store;
export { persistedStore };