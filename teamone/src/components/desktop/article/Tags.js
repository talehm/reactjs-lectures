import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip';

export default function Tags() {
  //const classes = useStyles();
    const handleTag=(i)=>{
        console.log(i)
    }
  return (
      <div>
          <Typography gutterBottom variant="h5" component="h3">
                        Tags
                    </Typography>
                    {[1,2,3,4,5,6].map((i)=><Chip key={i} onClick={()=>handleTag(i)} style={{margin:"5px 10px"}} color="primary" size="small" label="Clickable" />)}
          

          </div>
    
  );
}

