import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Register = () => {
    const [inpval,setInpval]= useState({
        name:"",
        email:'',
        age:'',
        mobile:'',
        work:'',
        desc:'',
        add:''
    })
    console.log(inpval);
    const setdata=(e)=>{
        console.log(e.target.value);
        const{name,value}=e.target

        setInpval((inpval)=>{
            return{
                ...inpval,[name]:value
            }
           
        })
    }

    const addinpdata = async(e)=>{
      e.preventDefault()

      const {name,email,age,mobile,work,add,desc}= inpval
        const res = await fetch('/register',{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            name,email,age,mobile,work,add,desc
          })
        })
        const data =await res.json()
        console.log(data);
        if(res.status === 404 || !data){
          alert("error")
          console.log("error");
        }else{
          alert("data added")
        }
    }
  return (
  
      <div className="container">
          
           <NavLink to='/'><button><ArrowBackIosIcon/> Home page</button></NavLink>
                
            
        <form className="mt-5">
          <div class="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1" class="form-label">
                Full Name
              </label>
              <input
              name="name"
              value={inpval.name}
              onChange={setdata}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
             
            </div>


            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Age
              </label>
              <input
              name="age"
              value={inpval.age}
              onChange={setdata}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>


            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
              name="email"
              value={inpval.email}
              onChange={setdata}
                type="Email"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>


            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Mobile
              </label>
              <input
              name="mobile"
              value={inpval.mobile}
              onChange={setdata}
                type="number"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Work
              </label>
              <input
              name="work"
              value={inpval.work}
              onChange={setdata}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" class="form-label">
                Address
              </label>
              <input
              name="add"
              value={inpval.add}
              onChange={setdata}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Description
              </label>
              <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control"  id="" cols="30" rows="10"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" onClick={addinpdata}>
              Submit
            </button>
          </div>
        </form>
      </div>
  
  );
};

export default Register;
