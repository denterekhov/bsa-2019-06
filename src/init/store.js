import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { enhancedStore } from './middleware';

export const store = createStore(rootReducer, enhancedStore);
