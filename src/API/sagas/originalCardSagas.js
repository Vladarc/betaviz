import { put, takeLatest,call } from 'redux-saga/effects';
import { priceAndQtyRequestToApi } from '../handlers/getOriginCardPriceAndQty';
import { fetchPriceAndQtyDataSuccess } from '../../actions/originalCardsActions';

function* getPriceData () {
    let { data } = yield call(priceAndQtyRequestToApi);
    yield put(fetchPriceAndQtyDataSuccess(data))
  }
  

export const cardValueSagas = [
    takeLatest('FETCH_PRICE_DATA', getPriceData)
];
 
  