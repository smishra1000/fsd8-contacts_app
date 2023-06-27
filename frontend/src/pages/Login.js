import { Link,useNavigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate();
    const login = (e)=>{
        e.preventDefault();
        navigate("/dashboard")
    }
    return (
        <div className="container">
            <h4 style={{ "textAlign": "center", borderBottom: "4px solid red" }}>Login</h4>
            <div className="login-box">
                <div className="row">
                    <form onSubmit={(e)=>login(e)}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
            <div className="row">
                <h5>Dont't have an account Register here<Link to="/signup">Signup</Link></h5>
            </div>
        </div>
    )
}

export default Login