import React, { useState, useContext } from 'react';
import './style.sass';

import { searchUser, registerUser } from '../../API';

import { AuthContext } from '../../context/AuthContext';

export const AuthPage = ({ history }) => {

    const { auth, setAuthSuccess, logOut } = useContext(AuthContext);
    console.log(auth);

    const [error, setError] = useState('');
    const [submitType, setSubmitType] = useState('login');
    const [fields, setFields] = useState({
        username: '',
        password: ''
    });

    const handleInputs = e => {
        setError('');
        const { name, value } = e.target;
        setFields(fields => ({
            ...fields,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        setError('');
        e.preventDefault();
        if (fields.username !== '' && fields.password !== '') {

            if (submitType === 'login') {
                handleUserLogin();
            } else {
                handleUserRegistration()
            }

        } else {
            setError('Fill all field, please')
        }
    }

    const handleUserLogin = async () => {
        const answer = await searchUser({
            username: fields.username,
            pass: fields.password
        })

        console.log(answer.length);
        if (answer.length) {
            setAuthSuccess(answer[0]);
            history.push('/');

        } else {
            console.log('Sorry');
            setError('Sorry, wrong credits')
        }
    }

    const handleUserRegistration = async () => {
        const foundUser = await searchUser({
            username: fields.username
        });

        if (foundUser.length) {
            setError('Sorry, this username already taken.')
        } else {
            const createdUser = await registerUser({
                username: fields.username,
                pass: fields.password
            })

            if (createdUser.username) {
                setAuthSuccess(createdUser);
                history.push('/');
            } else {
                setError("Sorry, try later")
            }

        }

    }



    return (
        <div>{auth ?
            <button style={{ marginTop: 40 }} onClick={logOut}>Log Out</button>
            :
            <div>
                <h1>{submitType === 'login' ?
                    "Please, enter data for login"
                    :
                    "Type data for registration"
                }</h1>
                <div className="auth-types">
                    <button
                        className={submitType === 'login' ? "active" : ''}
                        onClick={() => setSubmitType('login')}
                    >Login</button>
                    <button
                        className={submitType === 'registration' ? "active" : ''}
                        onClick={() => setSubmitType('registration')}
                    >Registration</button>
                </div>

                <h4>{error}</h4>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <input
                        value={fields.username}
                        onChange={handleInputs}
                        type="text"
                        name="username"
                        placeholder="username" />
                    <input
                        value={fields.password}
                        onChange={handleInputs}
                        type="password"
                        name="password"
                        placeholder="password" />
                    <button>SEND</button>
                </form>

            </div>
        }
        </div>
    )
}