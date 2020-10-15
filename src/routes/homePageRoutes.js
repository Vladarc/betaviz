import Home from "../components/HomePage/HomePage";
import generatePageWrapper from "../handlers/generatePageWrapper";

export default {
    homePage: {
        path: '/',
        component: generatePageWrapper({
            component:Home,
            isVisibleHeader:true
        })
    }
};







