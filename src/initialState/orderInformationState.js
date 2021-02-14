import { Map } from 'immutable';

const orderInformationState = Map({
  order: Map({
    size: { value: 'moo', measure: '' },
    corner: { value: 'square' },
    material: { value: '' },
    paper: { value: '' },
    qty: { value: '' },
    price: '',
  }),
  optionsSelected: true,
});

export default orderInformationState;
