import React, { Fragment, useState} from "react";

const Amat = () => {
    const [formData, setFormData] = useState({
        idtag:'',
        name:'',
        email:'',
        manager_name:'',
        revenue:''
    });
    const { idtag, name, email, manager_name, revenue} = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
    }
    
    return <Fragment>
        <h1 className="large text-primary">Client Info</h1>
        <p className="lead"><i className="fas fa-user"></i> Add Client Info</p>
        <form className="form" onSubmit={e =>onSubmit(e)}>

          <div className="form-group">
            <input 
            type="text" 
            placeholder="ID" 
            name="idtag" 
            value={idtag}
            onChange={e=>onChange(e)}
            required/>
          </div>

          <div className="form-group">
            <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={e=>onChange(e)}
            required />
          </div>

          <div className="form-group">
            <input type="email" 
            placeholder="Email Address eg:name@domain.com" 
            name="email"
            value={email}
            onChange={e=>onChange(e)} 
            required />
          </div>
          
          <div className="form-group">
            <input 
            type="text" 
            placeholder="Manager Name" 
            name="manager_name"
            value={manager_name}
            onChange={e=>onChange(e)} 
            required />
          </div>
          
          <div className="form-group">
            <input 
                type="Number" 
                placeholder="Revenue in Million" 
                name="revenue" 
                value={revenue}
            onChange={e=>onChange(e)}
                min="0"
                required />
          </div>

          <input type="submit" className="btn btn-primary" value="Register"/>
        </form>
        {/* <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p> */}
       
        </Fragment>  
        
  }
  
  export default Amat;