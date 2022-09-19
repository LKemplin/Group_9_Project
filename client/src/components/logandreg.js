import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const logandreg = (props) => {
    //useState for user in app.js

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    // const registerHandler
    const registerHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        .then((results) => {
            console.log(results)
            // setUser(results)?
            navigate('/') /* navigate to dashboard */
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.error)
        })

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                {/* register form */}
                <form className='form' onSubmit={registerHandler}>
                    <div>
                        <label className='form-label'>First Name:</label>
                        {errors.firstName && <p className='text-danger'>{errors.firstName.message}</p>}
                        <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Last Name:</label>
                        {errors.lastName && <p className='text-danger'>{errors.lastName.message}</p>}
                        <input type="text" className='form-control' onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Email:</label>
                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                        <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Password:</label>
                        {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                        <input type="text" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Confirm Password:</label>
                        {errors.confirmPassword && <p className='text-danger'>{errors.confirmPassword.message}</p>}
                        <input type="text" className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        <button>Create Account</button>
                    </div>
                </form>
            </div>
            <div className='col'>
                {/* login form */}
                <form>

                </form>
            </div>
        </div>
    </div>
  )
}

export default logandreg