import { useEffect, useState } from "react"

function ContactList() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:7000/contact/contactlist`, { method: "GET" }).then(function (res) {
            return res.json()
        }).then(function (data) {
            setContacts(data)

        })
    }, [])
    return (
        <div className="container">
            <div className="row">

                {contacts.map((conatct) => {
                    return (
                        <div className="col-md-3">
                            <div class="card">
                                <img src="https://www.instituteofphotography.in/wp-content/uploads/2015/05/dummy-profile-pic.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{conatct.name}</h5>
                                    <p class="card-text"><span class="badge text-bg-primary">{conatct.email}</span></p>
                                    <p class="card-text"><span class="badge text-bg-success">{conatct.phone}</span></p>
                                    <p class="card-text"><span class="badge text-bg-success">{conatct.address}</span></p>
                                    <a href="#" class="btn btn-primary">Edit</a>
                                    <a href="#" class="btn btn-warning">Share Contact</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ContactList