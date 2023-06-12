import React, {useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "./UserReducer.jsx";

function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(x => x.id == id);
    const {name, email} = existingUser[0];
    const [existingName, setExistingName] = useState(name);
    const [existingEmail, setExistingEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: existingName,
            email: existingEmail
        }));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Enter Name'
                            value={existingName}
                            onChange={e => setExistingName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control'
                            placeholder='Enter Email'
                            value={existingEmail}
                            onChange={e => setExistingEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-info mt-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update
