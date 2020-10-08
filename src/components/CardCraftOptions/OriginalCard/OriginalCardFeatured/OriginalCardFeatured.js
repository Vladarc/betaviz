import React from "react";
import "../../../../styles/OriginalCardFeatured.scss";
import {
  Typography,
  makeStyles,
  List,
  ListItem,
  
} from "@material-ui/core";

const useCardFeaturedStyles = makeStyles(() => ({
  cardTitle: {
    fontSize: "3rem",
    fontWeight: "normal",
    color: "#323c49",
  },
  subTitle: {
    fontSize: "1.8rem",
    color: "#323c49",
    margin: ".8em 0",
    fontWeight: 500,
  },
  price: {
    fontSize: "1.6rem",
    fontWeight: 500,
    color: "#323c49",
  },
  descriptionTitle: {
    fontSize: "2.1rem",
    fontWeight: 500,
    color: "#323c49",
    marginBottom: "0.3em",
  },
  descriptionText: {
    "& > p": {
      fontSize: "1.4rem",
      color: "#434f61",
      marginBottom: "1.3em",
    },
  },
  descriptionList: {
    paddingTop: "0",
  },
  descriptionListItems: {
    listStyle: "disc",
    display: "list-item",
    fontSize: "1.4rem",
  },
}));

const OriginalCardFeatured = ({ cardFeatured }) => {
  const classes = useCardFeaturedStyles();
  return (
    <div className={"card-featured"}>
      <div className={"card-featured__title"}>
        <Typography className={classes.cardTitle} variant="h1">
          {cardFeatured.title}
        </Typography>
        <Typography className={classes.subTitle}>
          {cardFeatured.subTitle}
        </Typography>
        <Typography className={classes.price}>{cardFeatured.price}</Typography>
      </div>
      <div className={classes.descriptionText}>
        <Typography variant="h2" className={classes.descriptionTitle}>
          {cardFeatured.descriptionTitle}
        </Typography>
        <Typography>{cardFeatured.descriptionText[0]}</Typography>
        <List className={classes.descriptionList}>
          {cardFeatured.descriptionList.map((listItemText, idx) => {
            return (
              <ListItem key={idx}>
                <span className={classes.descriptionListItems}>
                  {listItemText}
                </span>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default OriginalCardFeatured;
