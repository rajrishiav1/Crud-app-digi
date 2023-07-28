import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardActions';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams,NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Detail = () => {
  const {id} = useParams("")
  const [getuserdata,setUserdata]= useState([])
// console.log(id);
//  console.log(getuserdata);


  const getindvdata = async(e)=>{
    
    const res = await fetch(`/getuser/${id}`,{
      method:"GET",
      headers:{
        "content-type":"application/json"
      }
    })
    const data =await res.json()
    // console.log(data);
    if(res.status === 404 || !data){
      alert("error")
      console.log("error");
    }else{
      setUserdata(data)
     console.log("grt data success");
    }
}

useEffect(()=>{
  getindvdata()
},[])
  return (
   <div className="container mt-3"> 
   <h1 style={{fontWeight:400}}> Welcome {getuserdata.name} .</h1>
   <Card sx={{ maxWidth: 790 }}>
      <CardContent>
        
        <div className="row">
        <div className="btn btn-success">
           <NavLink to='/'><button><ArrowBackIosIcon/> Home page</button></NavLink>
                
            </div>
        <div className="left_view col-lg-6 col-md-6 col-12 mt-5">
        <img src="/man.png" style={{width:50}} alt="" />
        <h3 className='mt-3' >Name: <span>{getuserdata.name}</span></h3>
        <h3 className='mt-3'>Age: <span>{getuserdata.age}</span></h3>
        <h3 className='mt-3'><EmailIcon/>Email: <span>{getuserdata.email}</span></h3>
        <h3 className='mt-3'><WorkIcon/>Occupation: <span>{getuserdata.work}</span></h3>

        </div>
        <div className="right_view col-lg-6 col-md-6 col-12 mt-5">
           
            <h3 className='mt-5'> < PhoneAndroidIcon />Mobile: <span>{getuserdata.mobile}</span></h3>
            <h3 className='mt-3'>< PlaceIcon />Location: <span>{getuserdata.add}</span></h3>
            <h3>Description : <span>{getuserdata.desc}</span></h3>

        </div>


        </div>
        
       
      </CardContent>
      </Card>
   </div>
  )
}

export default Detail
