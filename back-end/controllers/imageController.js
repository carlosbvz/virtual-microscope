const { errorResponse } = require("../helpers/errorHelper");
const { getImageDataFromDB } = require("../services/imagesService");

exports.getImageData = function (req, res) {
  const imageId = req.params.id;
  const imageVersion = req.params.version;
  const imageData = getImageDataFromDB({imageId, imageVersion});

  if (imageData) {
    res.json(imageData);
  } else {
    res.json(
      errorResponse({
        status: 400,
        message: "Image not found",
      })
    );
  }
};
