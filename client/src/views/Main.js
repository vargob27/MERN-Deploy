import React from 'react';
import AllPets from '../components/AllPets';
import PetForm from '../components/PetForm';
import PetDetails from '../components/PetDetails';
import EditPet from '../components/EditPet';
import { Router } from '@reach/router';

const Main = () => {
    return (
        <>
            <Router>
                <AllPets path='/' />
                <PetForm path='/pets/new' />
                <PetDetails path='/pets/:_id' />
                <EditPet path='/pets/:_id/edit' />
            </Router>
        </>
    )
}
export default Main;