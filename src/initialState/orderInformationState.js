import { Map } from 'immutable';

const orderInformationState = Map({
  order: Map({
    size: { value: 'moo' },
    corner: { value: 'rounded' },
  }),
  optionsSelected: true,
  price: '',
});

export default orderInformationState;
