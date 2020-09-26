import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InteractiveImage from "../components/interactive-image/interactive-image";
import { interactiveImageURLApiRoute } from "../routes/api";
import withDefaultLayout from "../layouts/default";
import LoadingPage from "../components/loading/page-loading";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function LeafLetInteractive() {
  const query = useQuery();
  const imageId = query.get("id") || '';
  const imageVersion = query.get("version") || '';
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [mapOptions, setMapOptions] = useState({});

  useEffect(() => {
    fetch(`${interactiveImageURLApiRoute}/${imageId}/${imageVersion}`)
      .then((data) => {
        return data.text();
      })
      .then((response) => {
        const parsedData = JSON.parse(response);
        if (parsedData.error) console.log("image not found");
        else {
          setImageUrl(parsedData.imageUrl);
          setMapOptions(parsedData.mapOptions);
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [imageId, imageVersion]);

  return (
    isLoading ? <LoadingPage />
    : imageUrl
      ? <InteractiveImage
          url={imageUrl}
          mapOptions={mapOptions}
        />
        : <p> There is no Image with the id: {imageId}</p>
      
  )
}

const LeafLetInteractivePage = withDefaultLayout({
  WrappedComponent: LeafLetInteractive,
  containerOptions: {
    disableGutters: true,
  },
});
export default LeafLetInteractivePage;
