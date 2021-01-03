import React , {useState,useEffect} from 'react';
import { MemoryRouter, Route,useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Button from '@material-ui/core/Button'
import Paper from "@material-ui/core/Paper"
import IconButton from '@material-ui/core/IconButton';

export default function PaginationLink(props) {
  let history = useHistory();
  const totalPage = 10
  const query = history.location.pathname.split("/");
  let index=parseInt(query[query.length-1],10)
  if (isNaN(index)){
     index = 1
  } 

  const [page,setPage]=useState(index);

  const redirect = (i)=>{
    if (i===1){
      history.push("/articles")
    }else{
      history.push("/articles/page/"+i)
    }
    
    setPage(i)
  }
  return (
    <Paper>
      {Array.from(Array(totalPage), (e,i)=>(
      page === i+1 ? <Button key={i} onClick={()=>redirect(i+1)} aria-label="delete" variant="contained"  color="primary"> {i+1} </Button> :
        <Button key={i} onClick={()=>redirect(i+1)} aria-label="delete" variant="outlined"  color="primary"> {i+1}  </Button>
      ))}
      </Paper>
  );
}
