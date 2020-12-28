import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useHistory} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationControlled=(props)=> {
  const classes = useStyles();
  const history = useHistory()
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    
    if (value==1){
        history.push("/articles")
    }else{
        history.push("/articles/page/"+value)
    }
    setPage(value);
  };
  useEffect(() => {    
    const query = history.location.pathname.split("/");
    const page = query[query.length-1]
    setPage(page);
    //console.log(page)

  },[]);
  console.log(page)
  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
export default PaginationControlled