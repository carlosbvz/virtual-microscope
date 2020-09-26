import React from "react";
import TimelineIcon from '@material-ui/icons/Timeline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        marginTop: "90px",
        paddingLeft: "10px",
        position: "absolute",
        zIndex: 1000
    },
    icon: {
        color: "black",
        backgroundColor: "white",
        borderRadius: "5px",
        fontSize: "22px",
        border: "3px solid #ccc",
        padding: "3px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#f4f4f4;"
        }
    },
    active: {
      backgroundColor: "#4051b5",
      color: "white",
      "&:hover": {
        backgroundColor: "#4051b5",
      }
    }
  }));

export default function Controllers({editPolygon, isEditing}) {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <TimelineIcon
        title="editPolygon"
        onClick={editPolygon}
        className={`${classes.icon} ${isEditing && classes.active} `}
      >
      </TimelineIcon>
    </div>
  );
}
