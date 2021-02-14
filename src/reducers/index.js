import { combineReducers } from 'redux-immutable';
import { headerReducer } from './headerReducer';
import { originalCardReducer } from './originalCardReducer';
import { orderInformationReducer } from './orderInformationReducer';
import { cardTemplatesReducer } from './cardTemplatesReducer';
import { uploadCardBuilderReducer } from './uploadCardBuilderReducer';

export const rootReducers = combineReducers({
  headerReducer,
  originalCardReducer,
  orderInformationReducer,
  cardTemplatesReducer,
  uploadCardBuilderReducer,
});
