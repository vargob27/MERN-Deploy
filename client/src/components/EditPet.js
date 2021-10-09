import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditPet = (props) => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch(err => console.log(err))
    }, [props._id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${props._id}`, {
            petName,
            petType,
            petDescription,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to='/' className='nav'>back to home</Link>
            <h1>Pet Shelter</h1>
            <h2>Edit {petName}</h2>
            <fieldset>
                <form className="petForm" onSubmit={submitHandler}>
                    <div className="row1">
                        {errors.petName ?
                            <p>{errors.petName.message}</p>
                            : null
                        }
                        <p>
                            <label>Pet Name</label><br />
                            <input type="text" name="petName" value={petName} onChange={(e) => setPetName(e.target.value)} />
                        </p>
                        {errors.petType ?
                            <p>{errors.petType.message}</p>
                            : null
                        }
                        <p>
                            <label>Pet Type</label><br />
                            <input type="text" name="petType" value={petType} onChange={(e) => setPetType(e.target.value)} />
                        </p>
                        {errors.petDescription ?
                            <p>{errors.petDescription.message}</p>
                            : null
                        }
                        <p>
                            <label>Pet Description</label><br />
                            <input type="text" name="petDescription" value={petDescription} onChange={(e) => setPetDescription(e.target.value)} />
                        </p>
                    </div>
                    <div className="row2">
                        <p>
                            <label>Pet Skill 1 (optional)</label><br />
                            <input type="text" name="skillOne" value={skillOne} onChange={(e) => setSkillOne(e.target.value)} />
                        </p>
                        <p>
                            <label>Pet Skill 2 (optional)</label><br />
                            <input type="text" name="skillTwo" value={skillTwo} onChange={(e) => setSkillTwo(e.target.value)} />
                        </p>
                        <p>
                            <label>Pet Skill 3 (optional)</label><br />
                            <input type="text" name="skillThree" value={skillThree} onChange={(e) => setSkillThree(e.target.value)} />
                        </p>
                    </div>
                    <input type='submit' value='Edit Pet' className="button" />
                </form>
            </fieldset>
        </div>
    )
}
export default EditPet;