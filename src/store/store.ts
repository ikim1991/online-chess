import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof RootReducer>
export default Store;