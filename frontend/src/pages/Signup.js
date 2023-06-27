import { Link } from "react-router-dom"
function Signup() {
    return (
        <div className="container">
            <h4 style={{ "textAlign": "center", borderBottom: "4px solid red" }}>Signup</h4>
            <div className="login-box">
                <div className="row">
                    <form>
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
                <h5>Alredy an account please go to <Link to="/">Login</Link></h5>
            </div>

        </div>
    )
}

export default Signup