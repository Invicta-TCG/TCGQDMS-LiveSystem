import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import allReducers from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["topbarNavigationReducers"]
};

const persistedReducer = persistReducer(
  persistConfig,
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
let devtools = composeWithDevTools;
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
