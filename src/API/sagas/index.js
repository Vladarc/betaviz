import {  all } from 'redux-saga/effects';
import { cardValueSagas } from '../sagas/originalCardSagas';

export  function* rootSaga() {
    yield all([
      ...cardValueSagas,
    ])
  }