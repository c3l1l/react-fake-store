import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const login=async (e)=>{
        e.preventDefault();
        let model={username:email,password:password};
       let response=await axios.post("https://fakestoreapi.com/auth/login",model);
       console.log(response.data);
       localStorage.setItem("token",response.data.token);
       navigate("/");

    }
    return(
        <>
        <div className="container w-50">
        <h4>Login Page</h4>
                <form onSubmit={login}>
                    <div className="form-group w-100">
                        <label htmlFor="email">E-mail</label>
                        <input className="form-control" name="email" type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" name="password" type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary mt-4" >Login</button>
                </form>
        </div>


        </>
    );
}
export default Login;