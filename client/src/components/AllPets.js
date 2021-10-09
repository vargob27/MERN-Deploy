import React, { useEffect, useState } from "react";
import { Link } from '@reach/router';
import axios from "axios";

const AllPets = (props) => {
    const [allPets, setAllPets] = useState([]);
    const getPets = () => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setAllPets(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getPets();
        // const petCopy = [...allPets];
        // petCopy.sort((a, b) => (a.petType.localeCompare(b.petType)))
        // setAllPets(petCopy);
    }, []);

    return (
        <div>
            <div className="top">
                <div className="title">
                    <h1>Pet Shelter</h1>
                    <h2>These pets are looking for a good home</h2>
                </div>
                <div className="nav">
                    <Link to='/pets/new' className='nav'>Add a pet to the shelter</Link>
                </div>
            </div>
            <table className="petTable">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {allPets.sort((a, b) => (a.petType.localeCompare(b.petType))).map((pet, index) =>
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default AllPets