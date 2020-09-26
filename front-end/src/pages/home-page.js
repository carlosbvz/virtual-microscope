import React from "react";
import MapCard from "../components/cards/image-card";
import Typography from "@material-ui/core/Typography";
import withDefaultLayout from "../layouts/default";

function Home() {
  return (
    <>
      <br />
      <Typography variant="h4" component="h1">
        My Images
      </Typography>
      <p>Listing our POCs for the virtual microscope</p>
      {/* TODO: Fetch and list all images here */}
      <MapCard />
      <p>Listing 1 of 1</p>
    </>
  );
}
const HomePage = withDefaultLayout({
  WrappedComponent: Home
});
export default HomePage;
