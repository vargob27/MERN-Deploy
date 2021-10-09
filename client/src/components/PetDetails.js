import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetDetails = (props) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props._id)
            .then(res => setPet({
                ...res.data
            }))
        // eslint-disable-next-line
    }, [])

    const adoptPet = (petId) => {
        axios.delete(`http://localhost:8000/api/pet/${petId}`)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="top">
                <div className="title">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="nav">
                    <Link to='/' className='nav'>back to home</Link>
                </div>
                <div className="under">
                    <h2>Details about: {pet.petName}</h2>
                    <button onClick={(e) => { adoptPet(pet._id) }} className="adopt">Adopt {pet.petName}</button>
                </div>
            </div>
            <div className="petDetails">
                <fieldset>
                    <p><b>Pet Type:</b> {pet.petType}</p>
                    <p><b>Description:</b> {pet.petDescription}</p>
                    <ul><b>Skills:</b>
                        {pet.skillOne ? <li>{pet.skillOne}</li> : ''}
                        {pet.skillTwo ? <li>{pet.skillTwo}</li> : ''}
                        {pet.skillThree ? <li>{pet.skillThree}</li> : ''}
                    </ul>
                </fieldset>
            </div>
        </div >
    )
}
export default PetDetails;
