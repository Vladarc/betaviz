import { Map} from "immutable";

const orderInformationState = Map({
  order: Map({
    size:{value: 'moo' }
  }),
  optionsSelected:false,
  price: "",
});

export default orderInformationState;
