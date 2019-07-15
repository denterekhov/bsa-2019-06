import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
  duration:  true,
  collapsed: true,
  colors:    {
    title:     () => '#139BFE',
    prevState: () => '#1C5FAF',
    action:    () => '#149945',
    nextState: () => '#A47104',
    error:     () => '#FF0005',
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger];
const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore };