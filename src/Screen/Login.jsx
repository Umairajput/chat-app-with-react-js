import React, { useState } from 'react'
import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
    app,
    auth,
    db,
    firebaseConfig,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    initializeApp,
    getDoc,
    getAuth
} from '../Firebase/Firebase'


function Login({ value }) {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
   
    const app = initializeApp(firebaseConfig);
    let name;
    const LoginForm = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                // console.log(user)
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    name = docSnap.data().name
                    console.log("name", name)
                    navigate('/Sidebar')
                } else {
                    console.log("No such document!");
                }
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
        <div className="form" style={{ marginTop: '8%' }}>
            <div className="form_data">
                <h1>Login</h1>
                <div className="field">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 3, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='boxx'
                    ></Box>
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
                    email === "" && password === ""
                        ?
                        <button className='button' onClick={error}>Login</button>
                        :
                        <Link>
                            <button className="button" onClick={LoginForm}> Register </button>
                        </Link>
                }
                <p className='para'>Don't Have An Account ? <Link to="/Sidebar">Sign Up</Link> </p>
                {/* <div>
                    <GoogleLogin />
                </div> */}
            </div>
        </div>
    )
}

export default Login