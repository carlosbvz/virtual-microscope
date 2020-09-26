import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tags from "../tags/autocomplete";
import { useFormFields } from "../../libs/hooks";

function UploadImageForm(props) {
  const { setShouldBlockNavigation } = { ...props };
  const [fields, handleFieldChange] = useFormFields({
    title: "",
    description: "",
    tags: [],
    zipFile: "",
  });

  function onTagsChange(e, values, reason) {
    const tagsValues = values.map((tag) => {
      return tag._id;
    });
    handleFieldChange({}, { id: "tags", value: tagsValues });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (fields.title && fields.description && fields.zipFile.length > 0) {
        setShouldBlockNavigation(false);
    }
    console.log("submitiong", fields);
  }

  return (
    <>
      <form noValidate onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Image Title"
          name="title"
          autoComplete="title"
          onChange={handleFieldChange}
          autoFocus
        />
        <br />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Image description"
          name="description"
          autoComplete="description"
          onChange={handleFieldChange}
          multiline
          rows={4}
        />

        <br />
        <br />
        <Tags onTagsChange={onTagsChange} />
        <br />

        <DropzoneArea
          name="zipFile"
          onChange={(file) =>
            handleFieldChange({}, { id: "zipFile", value: file })
          }
          filesLimit={1}
          acceptedFiles={[".zip"]}
          dropzoneText="Drag and drop file or click to select (.zip)"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default UploadImageForm;
