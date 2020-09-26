import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../components/header/header";

const defaultContainerOptions = {
  maxWidth: "xl",
  component: "main"
}

export default function withDefaultLayout(props) {
  
  const { WrappedComponent, containerOptions } = {...props};
  const mergedContainerOptions = {...defaultContainerOptions, ...containerOptions};

  return class extends React.Component {
    render() {
      return (
        <>
          <Header />
          <Container {...mergedContainerOptions} >
            <WrappedComponent />
          </Container>
        </>
      );
    }
  };
}
