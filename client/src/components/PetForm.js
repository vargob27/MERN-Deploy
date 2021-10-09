import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetForm = () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
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
                    navigate('/')
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to='/' className='nav'>back to home</Link>
            <h1>Pet Shelter</h1>
            <h2>Know of a pet needing a home?</h2>
            <div className="fContainer">
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
                        <input type='submit' value='Add Pet' className="button" />
                    </form>
                </fieldset>
            </div>
        </div>
    )
}
export default PetForm;