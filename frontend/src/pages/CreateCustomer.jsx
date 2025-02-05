import {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateCustomer() {

    const [customer, setCustomer] = useState({
        fname:"",
        lname:"",
        email:""
    });

    const changement = (e) => {
        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate()
    const submitNewCustomer = (e) => {
        e.preventDefault(); // bloque le rafraichissement de la page
        axios.post("http://localhost:8585/john/insertCustomer", customer)
            .then(() => {
                navigate("/customersList") //n'appel pas au serveur et refresh pas la page, l'avantage du reload
            }).catch((error) => {
                console.log(error)
        })
    }

    return (
        <div>

            <div className="container mt-5">
                <div className="row justify-content-lg-start">
                    <div className="col-md-6">
                        <h2 className="mb-4">User Information</h2>
                        <form className="form-detail" method="post"  onSubmit={(e) => submitNewCustomer(e)}>
                            <div className="mb-3 ">
                                <label htmlFor="lastname" className="form-label text-start d-block">Last Name</label>
                                <input type="text" name="fname" className="form-control" id="firstname"
                                       placeholder="Enter your first name"
                                       required
                                       onChange={(e) => changement(e)} /** saisir et recuperer les donnes*/
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label text-start d-block">First Name</label>
                                <input type="text" name ="lname" className="form-control" id="lastname"
                                       placeholder="Enter your last name"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-start d-block">Email</label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email"
                                       required
                                       onChange={(e) => changement(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateCustomer;