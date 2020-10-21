import { Map } from 'immutable';

const orderInformationState = Map({
  order: Map({
    size: { value: 'moo' },
  }),
  optionsSelected: true,
  price: '',
});

export default orderInformationState;
