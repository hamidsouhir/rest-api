
import axios from 'axios'
import { GETUSERS } from './actionTypes'



export const getUsers=()=> async(dispatch)=>{
  try {
    const res= await axios.get('/all')
   console.log(res);
   dispatch({
    type : GETUSERS,
    payload:res.data
   })
  } catch (error) {
     alert('get error');
  }
} 





