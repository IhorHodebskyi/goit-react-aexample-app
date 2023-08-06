// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { tasksReducer, filtersReducer } from './reducer';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

//=========================================
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
