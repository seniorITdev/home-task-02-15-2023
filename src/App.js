import Routes from "./routes";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './store/reducers/index';
import { dataFetchSaga } from './store/middlewares';

const dataFetchMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: [dataFetchMiddleware]
});
dataFetchMiddleware.run(dataFetchSaga);

const App = () => {
  return (
    <Provider store = {store}>
      <Routes />
    </Provider>
  );
}

export default App