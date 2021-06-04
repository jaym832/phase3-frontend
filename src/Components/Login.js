import React from 'react';
import axios from 'axios';



class Login extends React.Component {

    state={
        username:'',
        password:''
    }

    setUser=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        
        })

    }

    adduser=(user)=>{

        let postOptions={
            method: "POST",
            headers:{
              'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(user)

          }
        //   fetch("http://localhost:9292/user",postOptions)
        //   .then(res=>res.json())
        //   .then(data=> console.log(data))
        axios.post(`http://localhost:9292/user`, user)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        console.log(user)


    }

    render(){

        const appStyle = {
            height: '250px',
            display: 'flex'
        };
        
        const formStyle = {
            margin: 'auto',
            padding: '10px',
            border: '1px solid #c9c9c9',
            borderRadius: '5px',
            background: '#f5f5f5',
            width: '220px',
            display: 'block'
        };
        
        const labelStyle = {
            margin: '10px 0 5px 0',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '15px',
        };
        
        const inputStyle = {
            margin: '5px 0 10px 0',
            padding: '5px', 
            border: '1px solid #bfbfbf',
            borderRadius: '3px',
            boxSizing: 'border-box',
            width: '100%'
        };
        
        const submitStyle = {
            margin: '10px 0 0 0',
            padding: '7px 10px',
            border: '1px solid #efffff',
            borderRadius: '3px',
            background: '#3085d6',
            width: '90%', 
            fontSize: '15px',
            color: 'white',
            display: 'block',
            textAlign: 'center',


        };
        
        const Field = React.forwardRef(({label, type}, ref) => {
            return (
              <div>
                <label style={labelStyle} >{label}</label>
                <input ref={ref} type={type} style={inputStyle} />
              </div>
            );
        });


        return(
            
            <div className ="login">
                
                <form  style={formStyle}  >
                    Username:
                    <input ref='' label="Username:" name="username" type="text" onChange={this.setUser}/>
                    Password:
                    <input ref='' label="Password:" name="password" type="password" onChange={this.setUser}/>
                    <div>
                    <a onClick={()=>this.adduser(this.state)} href="http://localhost:3000/nutrition" style={submitStyle} >Submit</a>
                    </div>
                  </form>

            
                                       
            </div>
                        
         
              
            

    
	
           )

}

}

export default Login;