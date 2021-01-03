import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Content from "./Content"
import Tags from "./Tags"
import Paper from "@material-ui/core/Paper"
import RelatedArticles from "./RelatedArticles"
export default function Article() {
  //const classes = useStyles();

  return (
      <Grid container spacing={3}  >
          
        <Grid item lg={2}>
            
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div style={{height:40}}></div>
        <Paper>
        
            <Content />
            </Paper>

        </Grid>
        <Grid item xs={12} md={4} lg={2}>
        <div style={{height:40}}></div>
            <Paper>
            <Tags />
            <div style={{height:40}}></div>
            <RelatedArticles />
            </Paper>
        </Grid>
      </Grid>
    
  );
}

