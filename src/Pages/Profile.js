import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Profile = () => {

  let {id_user} = useParams();
  console.log(id_user);
  const [users,setUsers]= useState([])
  let filltered = users.filter(element => element.id == id_user)
  console.log(filltered);

  const getDataUSers= async()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)
  }

  useEffect(()=>{
    getDataUSers()
  },[])
    
  return (
    <div>
        <h1>This is a Profile Page</h1>
        {filltered && filltered.map(element=><div>
          <h1>My name is {element.name}</h1>
          <h2>My phone number is {element.phone}</h2>
          <h2> My Email is {element.email}</h2>


        </div> )}
        
       
      
        
    </div>
  )
}

export default Profile