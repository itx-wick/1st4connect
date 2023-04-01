import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from 'redux-persist';
import {authReducer, drawerReducer, commonReducer, tabsReducer} from '../redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [],
  // blacklist: [],
  // debug :true,
};

const rootReducer = combineReducers({
  drawer: drawerReducer,
  common: commonReducer,
  user: authReducer,
  tabs: tabsReducer,
});

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk),
);
export const persistor = persistStore(store);
