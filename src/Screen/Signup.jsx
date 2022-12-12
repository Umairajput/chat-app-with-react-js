import React, { useState } from 'react'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import {
    app,
    auth,
    db,
    firebaseConfig,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    initializeApp
} from '../Firebase/Firebase'

function Signup() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const app = initializeApp(firebaseConfig);
    const Register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    number: number,
                    email: email,
                    password: password
                });
                swal("Good job!", "SignUp", "success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                swal(errorMessage)
            });
    }
    const error = () => {
        swal("Please Fill UP All Values")
    }
    return (
        <>
            <div className="main">
                <div className="form">
                    <div className="form_data">
                        <h1>Signup</h1>
                        <div className="field">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 3, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                className='boxx'
                            ></Box>
                            <div className="text">
                                <TextField
                                    id="outlined-password-input"
                                    label="Full Name"
                                    type={name}
                                    autoComplete="current-password"
                                    value={name} onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="text">
                                <TextField
                                    id="outlined-password-input"
                                    label="Number"
                                    type="number"
                                    autoComplete="current-password"
                                    className='TextField'
                                    value={number} onChange={e => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="text">
                                <TextField
                                    id="outlined-password-input"
                                    label="Email"
                                    type="email"
                                    autoComplete="current-password"
                                    className='TextField'
                                    value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="text">
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="Password"
                                    autoComplete="current-password"
                                    className='TextField'
                                    value={password} onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {
                            email === "" || password === "" || name === "" || password === ""
                                ?
                                <button className='button' onClick={error}>Register</button>
                                :
                                <Link to="/Login" >
                                    <button className="button" onClick={Register}> Register </button>
                                </Link>
                        }
                        <p className='para'>Have An Account ? <Link to="/Login">Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup