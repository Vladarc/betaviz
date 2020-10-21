import { Map, List } from 'immutable';

import StandartCarrdImage from '../image/business_card-standard.jpg';
import MooCardImage from '../image/business_card-moo.jpg';
import SquareCardImage from '../image/business_card-square.jpg';
import ProductImg from '../image/originaCard.jpg';
import StandartFullImage from '../image/businesscard_us-original-square_corners-mattelam.png';
import MOOFullImage from '../image/businesscard_us-original-square_corners-glosslam.png';
import SquareFullImage from '../image/businesscard_square-original-square_corners-glosslam-square.png';
import MatteMaterialImg from '../image/matte-original-card.jpg';
import GlossMaterialImg from '../image/gloss-original-card.jpg';

const originalCardState = Map({
  productImage: Map({
    isVisibale: false,
    previewImage: ProductImg,
    classes: 'product-image-wrapper_img',
  }),
  cardFeatured: Map({
    title: 'Original Business Cards',
    subTitle: '16pt, great quality paper',
    price: '50 cards from $19.99',
    descriptionTitle: 'Premium as standard',
    descriptionText: List([
      'Thicker than your average card, Original Business Cards set a new standard for “standard” business cards. With a smooth, uniform finish and excellent print quality, it’s the great value paper that FEELS great. So all your introductions can be super impressive.',
    ]),
    descriptionList: List([
      '130lb weight, 16pt thickness',
      'Available in two free finishes',
    ]),
  }),
  sizeOption: Map({
    title: 'Choose your size',
    radioBtn: List([
      {
        id: 'standard',
        title: 'Standard',
        img: StandartCarrdImage,
        description: '2.0″ x 3.5″',
        value: '2.0-3.5',
        previewImage: StandartFullImage,
      },
      {
        id: 'moo',
        title: 'MOO',
        img: MooCardImage,
        description: '2.16″ x 3.3″',
        value: '2.16-3.3',
        previewImage: MOOFullImage,
      },
      {
        id: 'square',
        title: 'Square',
        img: SquareCardImage,
        description: '2.56″ x 2.56″',
        value: '2.56-2.56',
        previewImage: SquareFullImage,
      },
    ]),
  }),
  chooseMaterial: List([
    {
      id: 'matte',
      title: 'Matte',
      description: 'With a smooth feel. And you can write on it, too.',
      img: MatteMaterialImg,
      value: 'matte',
    },
    {
      id: 'gloss',
      title: 'Gloss',
      description: 'Eye-catchingly shiny. Makes color photos pop.',
      img: GlossMaterialImg,
      value: 'gloss',
    },
  ]),
  chooseCorners: List([
    {
      id: 'square',
      title: 'Square',
      text: 'Sharp and Stylish',
      value: 'Square',
    },
    {
      id: 'rounded',
      title: 'Rounded',
      text: 'Smooth & Rounded',
      value: 'Rounded',
    },
  ]),
  quanTityTable: Map({
    header: List(['Quantity', 'Price per card', 'Pack price']),

    tableBody: List([
      { id: 'qty-50', qty: '50', price: '$0.40', packPrice: '$19.99' },
      { id: 'qty-100', qty: '100', price: '$0.40', packPrice: '$39.98' },
      { id: 'qty-150', qty: '150', price: '$0.40', packPrice: '$59.97' },
      { id: 'qty-200', qty: '200', price: '$0.35', packPrice: '$69.99 ' },
      { id: 'qty-400', qty: '400', price: '$0.30', packPrice: '$119.00' },
      { id: 'qty-600', qty: '600', price: '$0.25', packPrice: '$150.00' },
      { id: 'qty-800', qty: '800', price: '$0.25', packPrice: '$300.00' },
      { id: 'qty-900', qty: '800', price: '$0.25', packPrice: '$2500.00' },
      { id: 'qty-1000', qty: '800', price: '$0.25', packPrice: '$400.00' },
    ]),
  }),
  selectedElements: Map({
    size: { value: '' },
    material: { value: '' },
    corner: { value: '' },
    qty: { value: 'qty-150' },
    paper: { value: 'original', name: 'Original' },
  }),
  isSetDefaultOptions: false,
  summaryOrderInfo: Map({
    tableValues: Map({
      header: 'Summary',
      body: List([
        { id: 'size', title: 'Size', value: '-' },
        { id: 'paper', title: 'Paper', value: 'Original' },
        { id: 'cover', title: '', value: 'Coated on both sides' },
        { id: 'finish', title: 'Finish', value: '-' },
        { id: 'corners', title: 'Corners', value: '-' },
        { id: 'quantity', title: 'Quantity', value: '150' },
        { id: 'price', title: 'Price', value: '$59.97' },
      ]),
    }),
  }),
});

export default originalCardState;
