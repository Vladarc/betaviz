import { initialState } from "../initialState/index";
import { Map, List } from "immutable";
import {
  CHANGE_IMAGE,
  SELECT_QTY_HANDLE,
  SELECT_CORNER_HANDLE,
  SELECT_MATERIAL_HANDLE,
  SELECT_SIZE_HANDLE,
  SELECT_DEFAULT_COMBINATION,
  RESET_ORIGINAL_VALUES,
} from "../constants/originalCardConstants";

import ProductImg from "../image/originaCard.jpg";

const capitalize = (word) => word.replace(word[0], word[0].toUpperCase());
const findProps = (state, path, action) => {
  const foundElement = state
    .getIn(path)
    .toJSON()
    .find((el) => el.id === action);

  return foundElement;
};

export const OriginalCardReducer = (
  state = initialState.originalCard,
  action
) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      let imageForReplace = state.getIn([
        "sizeOption",
        "radioBtn",
        action.payload,
        "previewImage",
      ]);

      let setPrewievImageOfCard = state
        .setIn(["productImage", "previewImage"], imageForReplace)
        .setIn(["productImage", "classes"], "product-image-wrapper_prewiev-img")
        .setIn(["productImage", "isVisibale"], true);
      return setPrewievImageOfCard;

    case RESET_ORIGINAL_VALUES:
      const defaultSelectValue = Map({
        size: { value: "" },
        material: { value: "" },
        corner: { value: "" },
        qty: { value: "qty-150" },
        price: {}
      });
      const resetState = state
        .setIn(["productImage"], {
          isVisibale: false,
          previewImage: ProductImg,
          classes: "product-image-wrapper_img",
        })
        .setIn(["selectedElements"], defaultSelectValue)
        .setIn(["isSetDefaultOptions"], false)
        .setIn(
          ["summaryOrderInfo", "tableValues", "body"],
          List([
            { id: "size", title: "Size", value: "-" },
            { id: "paper", title: "Paper", value: "Original" },
            { id: "cover", title: "", value: "Coated on both sides" },
            { id: "finish", title: "Finish", value: "-" },
            { id: "corners", title: "Corners", value: "-" },
            { id: "quantity", title: "Quantity", value: "150" },
            { id: "price", title: "Price", value: "$59.97" },
          ])
        );
      return resetState;

    case SELECT_QTY_HANDLE:
      const { qty, packPrice } = findProps(
        state,
        ["quanTityTable", "tableBody"],
        action.payload
      );
      const selectedQty = state
        .setIn(["selectedElements", "qty"], { value: action.payload })

        .setIn(
          ["summaryOrderInfo", "tableValues", "body", 6, "value"],
          packPrice
        )
        .setIn(["summaryOrderInfo", "tableValues", "body", 5, "value"], qty);
      return selectedQty;

    case SELECT_CORNER_HANDLE:
      const { title: cornerTitle } = findProps(
        state,
        ["chooseCorners"],
        action.payload
      );
      const selectedCorner = state
        .setIn(["selectedElements", "corner"], { value: action.payload })
        .setIn(
          ["summaryOrderInfo", "tableValues", "body", 4, "value"],
          cornerTitle
        );
      return selectedCorner;

    case SELECT_MATERIAL_HANDLE:
      const { title: materialtitle } = findProps(
        state,
        ["chooseMaterial"],
        action.payload
      );
      const selectedMaterial = state
        .setIn(["selectedElements", "material"], { value: action.payload })
        .setIn(
          ["summaryOrderInfo", "tableValues", "body", 3, "value"],
          materialtitle
        );
      return selectedMaterial;

    case SELECT_SIZE_HANDLE:
      const { title: sizeTitle } = findProps(
        state,
        ["sizeOption", "radioBtn"],
        action.payload.id
      );
      const selectedSize = state
        .setIn(["selectedElements", "size"], {
          value: action.payload.id, measure:action.payload.measure
        })
        .setIn(
          ["summaryOrderInfo", "tableValues", "body", 0, "value"],
          sizeTitle
        );

      return selectedSize;

    case SELECT_DEFAULT_COMBINATION:
      let getPriceAndQty = findProps(
        state,
        ["quanTityTable", "tableBody"],
        action.payload.qty
      );
      let getImageForSelectedSize = findProps(
        state,
        ["sizeOption", "radioBtn"],
        action.payload.size
      );

      const defaultCombination = state
        .setIn(["selectedElements", "size"], { value: action.payload.size,measure:action.payload.measure })
        .setIn(
          ["productImage", "previewImage"],
          getImageForSelectedSize.previewImage
        )
        .setIn(["productImage", "classes"], "product-image-wrapper_prewiev-img")
        .setIn(["productImage", "isVisibale"], true)
        .setIn(["selectedElements", "material"], {
          value: action.payload.material,
        })
        .setIn(["selectedElements", "corner"], { value: action.payload.corner })
        .setIn(["selectedElements", "qty"], { value: action.payload.qty })

        .setIn(
          ["summaryOrderInfo", "tableValues", "body"],
          List([
            {
              id: "size",
              title: "Size",
              value: capitalize(action.payload.size),
            },
            { id: "paper", title: "Paper", value: "Original" },
            { id: "cover", title: "", value: "Coated on both sides" },
            {
              id: "finish",
              title: "Finish",
              value: capitalize(action.payload.material),
            },
            {
              id: "corners",
              title: "Corners",
              value: capitalize(action.payload.corner),
            },
            { id: "quantity", title: "Quantity", value: getPriceAndQty.qty },
            { id: "price", title: "Price", value: getPriceAndQty.packPrice },
          ])
        )
        .setIn(["isSetDefaultOptions"], true);
      return defaultCombination;

    default:
      return state;
  }
};
