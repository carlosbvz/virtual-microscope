// import React from "react";




// export default function PageLoading() {
//   const classes = useStyles();
//   return <div className={classes.loading}>Loading...</div>;
// }

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  loading: {
    height: "100vh",
    width: "100%",
    top: 0,
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress />
      <p>Loading...</p>
    </div>
  );
}