import Header from "./Header"
import { Outlet } from "react-router-dom"

function Dashboard(){
    return(
        <div className="container-fluid">
           <Header/>
           <Outlet />

        </div>
    )
}

export default Dashboard