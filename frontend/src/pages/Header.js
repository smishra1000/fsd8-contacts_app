import {Link} from "react-router-dom"
function Header() {
    return (
        <nav className="navbar navbar-expand-lg" style={{"backgroundColor": "#e3f2fd"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FSD8ConTactsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item">
                            <Link to="contactlist" className="nav-link active" aria-current="page" href="#">Contact List</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="addcontact" className="nav-link active" aria-current="page" href="#">Add Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="sharecontact" className="nav-link active" aria-current="page" href="#">Share Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header