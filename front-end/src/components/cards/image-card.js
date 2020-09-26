import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const history = useHistory();
  const redirectTo = (e) => history.push("/interactive-image?id=img-id123");

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={redirectTo}>
        
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://virtual-microscope-images.s3-us-west-2.amazonaws.com/img-id123/0/0/0.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kidneys
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The kidneys are two bean-shaped organs found in vertebrates. 
            They are located on the left and right in the retroperitoneal space, and in adult humans are about 12 centimetres (4 1⁄2 inches) in length.
          </Typography>
        </CardContent>
        
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
