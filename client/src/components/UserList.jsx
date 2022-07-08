import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/action'

const UserList = () => {
    const {users,loading}=useSelector((state)=>state)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers());
    
     
    },[])
    
  return (
    <div>
        {
            loading? <h2>loding...</h2>
            : users.map(el=>
                <div> 
                    <h1>{el.fullName}</h1>
                 </div>
                 )
        }

    </div>
  )
}

export default UserList