import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
const Home = () => {
 

const [getuserdata,setUserdata]= useState([])
console.log(getuserdata);

  const getinpdata = async(e)=>{
    
      const res = await fetch('/getdata',{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      })
      const data =await res.json()
      console.log(data);
      if(res.status === 404 || !data){
        alert("error")
        console.log("error");
      }else{
        setUserdata(data)
       console.log("grt data success");
      }
  }


  const deleteuser = async(id)=>{
    const res2 = await fetch(`/deleteuser/${id}`,{
           method:"DELETE",
           headers:{
               "content-type":"application/json"
      }
    })
    const deletedata = await res2.json()
    console.log(deletedata);

    if(res2.status === 404 || !deletedata){
      alert("error")
      console.log("error");
    }else{
     
     console.log("user delete success");
     getinpdata()
    }

  }
  useEffect(()=>{
    getinpdata()
  },[])


  return (
    <>
    <div className="mt-5">
      <div className="container" style={{overflow:"auto"}}>
        <div className="add_btn mt-2 mb-2" style={{ textAlign: "right" }}>
          <NavLink to='/register' className="btn btn-primary">+ Add Data</NavLink>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark ">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
            </tr>
          </thead>
          <tbody>

            {
              getuserdata.map((element,id)=>{
                return(
                  <>
                  <tr>
              <th scope="row">{id+1}</th>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.work}</td>
              <td>{element.mobile}</td>
              <td className="d-flex justify-content-between">
              <NavLink to={`view/${element._id}`}>
              <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                </NavLink>  
               
                <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}><DeleteIcon/></button>
              </td>
            </tr>
                  
                  </>
                )
              })

            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Home;
