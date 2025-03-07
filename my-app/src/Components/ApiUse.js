import React, { useContext} from 'react'
import { UserContext } from './UserContext'




export default function ApiUse() {
    const {user, setUser} = useContext(UserContext);


  return (
    <>
    <div>
        <h1 className='my-3'>Using API</h1>
        <div className="btn-container my-3">
            <button 
                className='btn btn-primary'
                onClick={() =>{ setUser({...user, age: Number(user.age) + 1})}}>
                Increse Age
            </button>
        
            <button 
                className='btn btn-primary mx-1'
                onClick={() =>{ setUser({...user, name: 'Dhawal'})}}>
                Change Name
            </button>
        </div>
      
    </div>
    <p>Name:{user.name}, Age:{user.age} </p>
    </>
  );
}

