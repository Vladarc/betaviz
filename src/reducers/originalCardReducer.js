import { Map, List } from 'immutable';
import { initialState } from '../initialState/index';
import {
  CHANGE_IMAGE,
  SELECT_QTY_HANDLE,
  SELECT_CORNER_HANDLE,
  SELECT_MATERIAL_HANDLE,
  SELECT_SIZE_HANDLE,
  SELECT_DEFAULT_COMBINATION,
  RESET_ORIGINAL_VALUES,
} from '../constants/originalCardConstants';
import { capitalize } from '../handlers/сapitalizeFunc.js';
import { findProps } from '../handlers/findPropsHandle';
import ProductImg from '../image/originaCard.jpg';

export const originalCardReducer = (
  state = initialState.originalCard,
  action
) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      return state
        .setIn(
          ['productImage', 'previewImage'],
          state.getIn([
            'sizeOption',
            'radioBtn',
            action.payload,
            'previewImage',
          ])
        )
        .setIn(['productImage', 'classes'], 'product-image-wrapper_prewiev-img')
        .setIn(['productImage', 'isVisibale'], true);

    case RESET_ORIGINAL_VALUES:
      return state
        .setIn(['productImage'], {
          isVisibale: false,
          previewImage: ProductImg,
          classes: 'product-image-wrapper_img',
        })
        .setIn(
          ['selectedElements'],
          Map({
            size: { value: '' },
            material: { value: '' },
            corner: { value: '' },
            qty: { value: 'qty-150' },
            price: {},
          })
        )
        .setIn(['isSetDefaultOptions'], false)
        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body'],
          List([
            { id: 'size', title: 'Size', value: '-' },
            { id: 'paper', title: 'Paper', value: 'Original' },
            { id: 'cover', title: '', value: 'Coated on both sides' },
            { id: 'finish', title: 'Finish', value: '-' },
            { id: 'corners', title: 'Corners', value: '-' },
            { id: 'quantity', title: 'Quantity', value: '150' },
            { id: 'price', title: 'Price', value: '$59.97' },
          ])
        );

    case SELECT_QTY_HANDLE:
      return state
        .setIn(['selectedElements', 'qty'], { value: action.payload })

        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body', 6, 'value'],
          findProps(state, ['quanTityTable', 'tableBody'], action.payload)
            .packPrice
        )
        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body', 5, 'value'],
          findProps(state, ['quanTityTable', 'tableBody'], action.payload).qty
        );

    case SELECT_CORNER_HANDLE:
      return state
        .setIn(['selectedElements', 'corner'], { value: action.payload })
        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body', 4, 'value'],
          findProps(state, ['chooseCorners'], action.payload).title
        );

    case SELECT_MATERIAL_HANDLE:
      return state
        .setIn(['selectedElements', 'material'], { value: action.payload })
        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body', 3, 'value'],
          findProps(state, ['chooseMaterial'], action.payload).title
        );

    case SELECT_SIZE_HANDLE:
      return state
        .setIn(['selectedElements', 'size'], {
          value: action.payload.id,
          measure: action.payload.measure,
        })
        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body', 0, 'value'],
          findProps(state, ['sizeOption', 'radioBtn'], action.payload.id).title
        );

    case SELECT_DEFAULT_COMBINATION:
      return state
        .setIn(['selectedElements', 'size'], {
          value: action.payload.size,
          measure: action.payload.measure,
        })
        .setIn(
          ['productImage', 'previewImage'],
          findProps(state, ['sizeOption', 'radioBtn'], action.payload.size)
            .previewImage
        )
        .setIn(['productImage', 'classes'], 'product-image-wrapper_prewiev-img')
        .setIn(['productImage', 'isVisibale'], true)
        .setIn(['selectedElements', 'material'], {
          value: action.payload.material,
        })
        .setIn(['selectedElements', 'corner'], { value: action.payload.corner })
        .setIn(['selectedElements', 'qty'], { value: action.payload.qty })

        .setIn(
          ['summaryOrderInfo', 'tableValues', 'body'],
          List([
            {
              id: 'size',
              title: 'Size',
              value: capitalize(action.payload.size),
            },
            { id: 'paper', title: 'Paper', value: 'Original' },
            { id: 'cover', title: '', value: 'Coated on both sides' },
            {
              id: 'finish',
              title: 'Finish',
              value: capitalize(action.payload.material),
            },
            {
              id: 'corners',
              title: 'Corners',
              value: capitalize(action.payload.corner),
            },
            {
              id: 'quantity',
              title: 'Quantity',
              value: findProps(
                state,
                ['quanTityTable', 'tableBody'],
                action.payload.qty
              ).qty,
            },
            {
              id: 'price',
              title: 'Price',
              value: findProps(
                state,
                ['quanTityTable', 'tableBody'],
                action.payload.qty
              ).packPrice,
            },
          ])
        )
        .setIn(['isSetDefaultOptions'], true);

    default:
      return state;
  }
};
