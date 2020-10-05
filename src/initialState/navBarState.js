import { Map, List } from "immutable";

const navBarState = Map({
  isBackDropVisible: false,
  navBarLinks: List([
    {
      title: "Featured",
      dataAttr: "HOWER_OPEN_FEATURED_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },

    {
      title: "BusinessCards",
      dataAttr: "HOWER_OPEN_BUSINESSCARDS_CT",
      isVisible: false,
      subMenu: {
        links: List([
          {
            name: "Business Cards",
            path: "/originalcard",
            subList: List([1]),
            isSubMenuOpened: false,
          },
          {
            name: "Square Business Cards",
            path: "/",
          },
          {
            name: "Mini Cards",
            path: "/",
          },
        ]),
        isActive: false,
      },
    },
    {
      title: "Face Masks",
      dataAttr: "HOWER_OPEN_FACEMASKS_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },
    {
      title: "Marketing Materials",
      dataAttr: "HOWER_OPEN_MATERIALS_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },
    {
      title: "Stationery",
      dataAttr: "HOWER_OPEN_STATIONERY_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },
    {
      title: "Accessories",
      dataAttr: "HOWER_OPEN_ACCESSORIES_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },
    {
      title: "Business Services",
      dataAttr: "HOWER_OPEN_SERVICES_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },
    {
      title: "Help & FAQs",
      dataAttr: "HOWER_OPEN_FAQ_CT",
      isVisible: false,
      subMenu: {
        links: List([{ name: "Business Cards", path: "/" }]),
        isActive: false,
      },
    },
  ]),
});

export default navBarState;
