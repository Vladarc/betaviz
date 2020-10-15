import CardTemplates from "../components/CardTemplates/CardTemplatesContainer";
import generatePageWrapper from "../handlers/generatePageWrapper";

export default {
    cardTemplates: {
        path: "/cardtemplates",
        component: generatePageWrapper({
            component:CardTemplates,
            isVisibleHeader:true
        })
    }
}



