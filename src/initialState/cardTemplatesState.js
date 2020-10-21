import { Map, List } from 'immutable';

const cardTemplatesState = Map({
  sizeOptions: List([
    { id: 'standard', name: 'Standard', value: '2.0-3.5' },
    { id: 'moo', name: 'MOO', value: '2.16-3.3' },
    { id: 'square', name: 'Square', value: '2.56-2.56' },
    { id: 'mini', name: 'Mini', value: '2.10-2.80' },
  ]),
  paperOptions: List([
    { id: 'original', name: 'Original' },
    { id: 'cotton', name: 'Cotton' },
    { id: 'super', name: 'Super' },
    { id: 'luxe', name: 'Luxe' },
  ]),
});
export default cardTemplatesState;
