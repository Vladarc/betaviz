import OriginalCard from "../components/CardCraftOptions/OriginalCard/OriginalCardContainer";
import generatePageWrapper from "../handlers/generatePageWrapper"

export default {
   originalCard:{
      path:"/originalcard",
      component:generatePageWrapper({
         component:OriginalCard,
         isVisibleHeader:true
      })
   }
}
