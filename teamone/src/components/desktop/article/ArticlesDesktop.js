import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import articleImg from '../../../assets/images/article.jpeg'
import Grid from '@material-ui/core/Grid';
import Pagination from "./Pagination"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainDiv:{padding:50}
});


export default function ArticlesDesktop() {
  const classes = useStyles();
  let history = useHistory();

  const openArticle=(i)=>{
    console.log(i)
    history.push("/article/hello-world")
  }
  return (
      <div className={classes.mainDiv}>
      <Grid container justify="center" spacing={3} >
      <Grid item xs={12} >
        <Typography gutterBottom variant="h4" component="h4">
            Our Articles
        </Typography>
      </Grid>
      {[1,2,3,4,5,6,7,8].map(i=>
        <Grid item xs={3} key={i}>
            <Card className={classes.root} onClick={()=>openArticle(i)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={articleImg}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Article Header
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        20 Dec 2020
                    </Typography>
                    </CardContent>
                </CardActionArea>
               
            </Card>
        </Grid>
            )}
            <Grid item xs={6} >
                <Pagination />
            </Grid>
      </Grid>
      </div>
    
  );
}

