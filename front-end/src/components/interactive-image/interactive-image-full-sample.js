// This example contains all available methods

import React, { Component, createRef } from "react";
import ReactLeafletEditable from "react-leaflet-editable";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import "leaflet-editable";
import { Map, TileLayer } from "react-leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadowIcon from "leaflet/dist/images/marker-shadow.png";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";
import Controllers from "./controllers";

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadowIcon,
});

export default class InteractiveImage extends Component {
  constructor() {
    super();
    this.state = {
      isContinueDisabled: true,
    };
    this.editRef = createRef();
    this.mapRef = createRef();
    this.redoArr = [];
    this.editors = [];
    this.layers = [];
  }

  editPolygon = () => {
    this.editRef.current.startPolygon();
  };
  editPolyline = () => {
    this.editRef.current.startPolyline();
  };
  editCircle = () => {
    this.editRef.current.startCircle();
  };
  editMarker = () => {
    this.editRef.current.startMarker();
  };
  editRectangle = () => {
    this.editRef.current.startRectangle();
  };
  refresh = () => {
    console.log(this.editRef.current.state.map);
  };
  clearAll = () => {
    this.editRef.current.clearAll();
    this.editors = [];
  };
  onEndDrawing = (e, map) => {
    this.redoArr = [];
    this.removeTooltip(e);
    this.editors.push(e.layer.editor);
    this.layers.push(e.layer);
    this.setState({
      isContinueDisabled: !this.editors.some((editor) => {
        return editor.continueBackward;
      }),
    });
    this.layerListeners();
  };
  layerListeners = () => {
    this.layers.forEach((layer) => {
      layer.on("mouseover", (e) => {
        layer.bindTooltip("Ctrl+click delete layer").openTooltip();
      });
      layer.on("click", L.DomEvent.stop).on(
        "click",
        function (e) {
          console.log(this.editor.deleteShapeAt, this.editEnabled(), e);
          if (
            (e.originalEvent.ctrlKey || e.originalEvent.metaKey) &&
            this.editEnabled() &&
            this.editor.deleteShapeAt
          )
            this.editor.deleteShapeAt(e.latlng);
        },
        layer
      );
    });
  };
  continueBackward = () => {
    this.editors.forEach((editor) => {
      editor.continueBackward && editor.continueBackward();
    });
  };
  continueForward = () => {
    this.editors.forEach((editor) => {
      editor.continueForward && editor.continueForward();
    });
  };
  onEnable = (e, map) => {
    console.log("onEnable", e, map);
  };
  onStartDrawing = (e, map) => {
    const container = document.querySelector(".leaflet-container");
    this.tooltip = L.DomUtil.create("span", "tooltip-wrapper");
    this.tooltip.style.zIndex = "9999";
    this.tooltip.style.position = "absolute";
    container.appendChild(this.tooltip);
    this.addTooltip(e);
  };
  onDrawingClick = (e, map) => {
    this.updateTooltip(e);
  };
  addTooltip = (e) => {
    L.DomEvent.on(document, "mousemove", this.moveTooltip);
    this.tooltip.innerHTML = `Ctrl+Z, Shift+Z`;
    this.tooltip.style.display = "block";
  };
  removeTooltip = (e) => {
    this.tooltip.innerHTML = "";
    this.tooltip.style.display = "none";
    L.DomEvent.off(document, "mousemove", this.moveTooltip);
  };
  moveTooltip = (e) => {
    this.tooltip.style.left = e.clientX + 20 + "px";
    this.tooltip.style.top = e.clientY - 10 + "px";
  };
  updateTooltip = (e) => {
    if (!e.layer.editor._drawnLatLngs) return;
    if (e.layer.editor._drawnLatLngs.length < e.layer.editor.MIN_VERTEX) {
      this.tooltip.innerHTML = `Ctrl+Z, Shift+Z. ${e.latlng.lat},${e.latlng.lng}`;
    } else {
      this.tooltip.innerHTML = `Ctrl+Z, Shift+Z. ${e.latlng.lat},${e.latlng.lng}`;
    }
  };
  redoListener = () => {
    let latlng = null;
    const that = this;
    L.DomEvent.addListener(
      document,
      "keydown",
      function (e) {
        if (e.keyCode === 90) {
          if (!this.editTools._drawingEditor) return;
          if (e.shiftKey) {
            if (that.redoArr.length)
              this.editTools._drawingEditor.push(that.redoArr.pop());
          } else {
            latlng = this.editTools._drawingEditor.pop();
            if (latlng) that.redoArr.push(latlng);
          }
        }
      },
      this.mapRef.current.leafletElement
    );
  };
  componentDidMount() {
    // const map = this.mapRef.current.leafletElement;
    // this.polyline = L.polyline([[43.1, 1.2], [43.2, 1.3], [43.3, 1.2]]).addTo(map);
    // console.log(this.polyline)
    // map.fitBounds(this.polyline.getBounds())
    // console.log(this.polyline.enableEdit())
    // this.polyline.editor.continueForward();
    // this.polyline.editor.continueBackward()
    this.redoListener();
  }
  render() {
    // const {
    //     isContinueDisabled
    // } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <ReactLeafletEditable
          ref={this.editRef}
          onStartDrawing={this.onStartDrawing}
          onDrawingClick={this.onDrawingClick}
          onEndDrawing={this.onEndDrawing}
          onEnable={this.onEnable}
          // Other Available methods
          onShapeDelete={(e, map) => {
            console.log("shape delete");
          }}
          onShapeDeleted={(e, map) => {
            console.log("shape deleted");
          }}
          onEditing={(e, map) => {
            console.log("onEditing");
          }}
          onDisable={(e, map) => {
            console.log("onDisable");
          }}
          onDrawingCommit={(e, map) => {
            console.log("onDrawingCommit");
          }}
          onDrawingMouseDown={(e, map) => {
            console.log("onDrawingMouseDown");
          }}
          onDrawingMouseUp={(e, map) => {
            console.log("onDrawingMouseUp");
          }}
          onDrawingMove={(e, map) => {
            console.log("onDrawingMove");
          }}
          onCancelDrawing={(e, map) => {
            console.log("onCancelDrawing");
          }}
          onDragStart={(e, map) => {
            console.log("onDragStart");
          }}
          onDrag={(e, map) => {
            console.log("onDrag");
          }}
          onDragEnd={(e, map) => {
            console.log("onDragEnd");
          }}
          onVertexMarkerDrag={(e, map) => {
            console.log("onVertexMarkerDrag");
          }}
          onVertexMarkerDragStart={(e, map) => {
            console.log("onVertexMarkerDragStart");
          }}
          onVertexMarkerDragEnd={(e, map) => {
            console.log("onVertexMarkerDragEnd");
          }}
          onVertextCtrlClick={(e, map) => {
            console.log("onVertextCtrlClick");
          }}
          onNewVertex={(e, map) => {
            console.log("onNewVertex");
          }}
          onVertexMarkerClick={(e, map) => {
            console.log("onVertexMarkerClick");
          }}
          onVertexRawMarkerClick={(e, map) => {
            console.log("onVertexRawMarkerClick");
          }}
          onVertexDeleted={(e, map) => {
            console.log("onVertexDeleted");
          }}
          onVertexMarkerCtrlClick={(e, map) => {
            console.log("onVertexMarkerCtrlClick");
          }}
          onVertexMarkerShiftClick={(e, map) => {
            console.log("onVertexMarkerShiftClick");
          }}
          onVertexMarkerMetaKeyClick={(e, map) => {
            console.log("onVertexMarkerMetaKeyClick");
          }}
          onVertexMarkerAltClick={(e, map) => {
            console.log("onVertexMarkerAltClick");
          }}
          onVertexMarkerContextMenu={(e, map) => {
            console.log("onVertexMarkerContextMenu");
          }}
          onVertexMarkerMouseDown={(e, map) => {
            console.log("onVertexMarkerMouseDown");
          }}
          onVertexMarkerMouseOver={(e, map) => {
            console.log("onVertexMarkerMouseOver");
          }}
          onVertexMarkerMouseOut={(e, map) => {
            console.log("onVertexMarkerMouseOut");
          }}
          onMiddleMarkerMouseDown={(e, map) => {
            console.log("onMiddleMarkerMouseDown");
          }}
        >
          <div>
            <Map
              ref={this.mapRef}
              editable={true}
              zoom={this.props.mapOptions.zoom}
              center={this.props.mapOptions.center}
              maxZoom={this.props.mapOptions.maxZoom}
              minZoom={this.props.mapOptions.minZoom}
            >
              <Controllers editPolygon={this.editPolygon} />
              <TileLayer url={this.props.url} noWrap={true} />
            </Map>
          </div>
        </ReactLeafletEditable>
      </div>
    );
  }
}
