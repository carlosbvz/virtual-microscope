import React, { useState } from "react";
import { Prompt } from "react-router";
import withDefaultLayout from "../layouts/default";
import UploadImageForm from "../components/forms/upload-image-form";
import Typography from "@material-ui/core/Typography";

function UploadImage() {
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);

  return (
    <>
      <Prompt
        when={shouldBlockNavigation}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      <br />
      <br />
      <Typography gutterBottom variant="h5" component="h2">
        Upload Images
      </Typography>
      <p>Please complete the following info to upload your image:</p>
      <br />
      <UploadImageForm setShouldBlockNavigation={setShouldBlockNavigation} />
    </>
  );
}
const containerOptions = {
  maxWidth: "sm",
};
const UploadImagePage = withDefaultLayout({
  WrappedComponent: UploadImage,
  containerOptions,
});
export default UploadImagePage;
