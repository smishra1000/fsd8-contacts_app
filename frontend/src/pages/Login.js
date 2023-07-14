import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const onEmailChange = (e) => {
        setEmail(e.target.value)

    }
    const onPaaswordChange = (e) => {
        setPassword(e.target.value)

    }
    const login = (e) => {
        e.preventDefault();
        console.log(email, password)

        fetch(`http://localhost:7000/auth/login`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) }).then(function (res) {
            return res.json()
        }).then(function (data) {
            alert(data.msg)
            if (data.msg === "login successfully") {
                navigate("/dashboard")
            }

        })
    }
    return (
        <div className="container">
            <h4 style={{ "textAlign": "center", borderBottom: "4px solid red" }}>Login</h4>
            <div className="login-box">
                <div className="row">
                    <form onSubmit={(e) => login(e)}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => onEmailChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => onPaaswordChange(e)} />
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