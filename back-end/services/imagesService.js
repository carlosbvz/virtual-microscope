// TODO: Get data from DB instead of hardcoded
const interactiveImagesData = require("../mock-data/images/interactive.json");

exports.getImageDataFromDB = ({ imageId, imageVersion }) => {
  if (imageId === "img-id123") {
    return interactiveImagesData;
  } else {
    return null;
  }
};
