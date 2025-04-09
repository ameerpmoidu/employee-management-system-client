import React from 'react'
import useAuth from '../context/authContext'
import {useNavigate} from 'react-router-dom'

const adminDashboard = () => {
       const {user,loading} = useAuth ()
       const navigate = useNavigate()

       if(loading){
        return <div>loading....</div>
       }
       if(!user){
        navigate('/login')
       }



  return (
    <div>
      adminDashboard{ user&& user.name}
    </div>
  )
}

export default adminDashboard
