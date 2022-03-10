import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./modules/chatReducer";
import roomReducer from "./modules/roomReducer";
import todoReducer from "./modules/todoReducer";
import userReducer from "./modules/userReducer";
import postReducer from "./modules/postReducer";
import webrtcReducer from "./modules/webrtcReducer";
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  roomReducer: roomReducer,
  userReducer: userReducer,
  chatReducer: chatReducer,
  todoReducer: todoReducer,
  postReducer: postReducer,
  webrtcReducer: webrtcReducer,
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
