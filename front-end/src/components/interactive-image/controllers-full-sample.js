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
  }));

export default function Controllers({editPolygon}) {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <TimelineIcon
        title="editPolygon"
        onClick={editPolygon}
        className={classes.icon}
      >
      </TimelineIcon>

{/* 
      <button
        // disabled={isContinueDisabled}
        title="continueBackward"
        onClick={this.continueBackward}
        className="editable-btn"
      >
        continueBackward
      </button>
      <button
        // disabled={isContinueDisabled}
        title="continueForward"
        onClick={this.continueForward}
        className="editable-btn"
      >
        continueForward
      </button>
      <button title="clearAll" onClick={this.clearAll} className="editable-btn">
        clearAll
      </button>

      <button onClick={this.refresh} className="editable-btn">
        refresh
      </button>
      <button
        title="editPolyline"
        onClick={this.editPolyline}
        className="editable-btn"
      >
        editPolyline
      </button>
      <button
        title="editMarker"
        onClick={this.editMarker}
        className="editable-btn"
      >
        editMarker
      </button>
      <button
        title="editRectangle"
        onClick={this.editRectangle}
        className="editable-btn"
      >
        editRectangle
      </button>
      <button
        title="editCircle"
        onClick={this.editCircle}
        className="editable-btn"
      >
        editCircle
      </button>
      <button title="editHole" onClick={this.editHole} className="editable-btn">
        editHole
      </button> */}
    </div>
  );
}
