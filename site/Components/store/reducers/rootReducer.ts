import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, Context, MakeStore, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  userReducer,
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore: MakeStore<any> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
