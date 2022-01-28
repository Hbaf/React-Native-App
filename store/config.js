import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
 
import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}