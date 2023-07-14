import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

function AddContact() {
    const [contactData, setContactData] = useState({ name: "", email: "", phone: "", address: "" })
    const navigate = useNavigate();
    const { email, phone, address, name } = contactData
    const onFieldChange = (e) => {
        setContactData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const addContact = (e) => {
        e.preventDefault();
        fetch(`http://localhost:7000/contact/addcontact`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(contactData) }).then(function (res) {
            return res.json()
        }).then(function (data) {
            alert(data.msg)
            if (data.msg === "conatct created successfully") {
                navigate("/contactlist")
            }

        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <h4 style={{ "textAlign": "center", borderBottom: "4px solid red" }}>Add Contact</h4>
                    <div className="login-box">
                        <div className="row">
                            <form onSubmit={(e) => addContact(e)}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={name} onChange={(e) => onFieldChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => onFieldChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={phone} onChange={(e) => onFieldChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="address" value={address} onChange={(e) => onFieldChange(e)} />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default AddContact