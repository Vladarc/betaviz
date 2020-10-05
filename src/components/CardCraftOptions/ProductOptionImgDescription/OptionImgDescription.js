import React from "react";
import "./OptionImgDescription.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem,faPrint } from "@fortawesome/free-solid-svg-icons";

const OptionImgDescription = (props) => {
  return (
    <div className={"option-img-description"}>
      <div className={"option-img-description_item"}>
        <div className={"option-img-description_icon-wrapper"}>
          <FontAwesomeIcon
            icon={faGem}
            className={"option-img-description_icon"}
          />
        </div>
        <div className={"option-img-description_text"}>
             <div className={"option-img-description_text_title"}> 
            The MOO Promise
            </div>
            <p>We move heaven and earth so you are happy with your order!</p>
        </div>
      </div>

      <div className={"option-img-description_item"}>
        <div className={"option-img-description_icon-wrapper"}>
          <FontAwesomeIcon
            icon={faPrint}
            className={"option-img-description_icon"}
          />
        </div>
        <div className={"option-img-description_text"}>
             <div className={"option-img-description_text_title"}> 
             Free full-color printing
            </div>
            <p>Print full color on both sides of your business cards.</p>
        </div>
      </div>
    </div>
  );
};

export default OptionImgDescription;
