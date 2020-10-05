import { Map, List } from "immutable";

const headerState = Map({
  headerLinks: List([
    {
      title: "United States (English)",
      language: "Eng",
      type: "lang",
      icon: true,
      selected: true,
      className: "hover-select",
      img: {
        size: ["1em", "1em"],
        name: "usa",
        className: "icon-lang",
      },
    },
    {
      title: "Account",
      icon: false,
    },
    {
      title: "Sign In",
      icon: false,
    },
    {
      title: "Cart",
      icon: true,
      img: {
        size: ["1em", "1em"],
        name: "cart",
        className: "icon-cart",
      },
    },
  ]),
  language: List([
    {
      title: "United States (England)",
      language: "Ger",
      selected: false,
      icon: true,
      img: {
        size: ["1em", "1em"],
        name: "usa",
        className: "lang_icon",
      },
    },
    {
      title: "United States (Brazil)",
      language: "Brz",
      selected: false,
      icon: true,
      img: {
        size: ["1em", "1em"],
        name: "usa",
        className: "lang_icon",
      },
    },
    {
      title: "United States (South America)",
      language: "Afr",
      selected: false,
      icon: true,
      img: {
        size: ["1em", "1em"],
        name: "usa",
        className: "lang_icon",
      },
    },
    {
      title: "United States (English)",
      language: "Eng",
      selected: true,
      icon: true,
      img: {
        size: ["1em", "1em"],
        name: "usa",
        className: "lang_icon",
      },
    },
  ]),
  languageSelectClasses: Map({
    className: List(["select-lang", "select-lang_item"]),
    isOpen: false,
  }),
});

export default headerState;
