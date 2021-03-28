import './Login.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";

import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"

import authenticate from "../../../utils/authenticate";
import UserContext from "../../../Context";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:5000/api/user/login', {
                username,
                password
            }, (user) => {
                context.logIn(user)
                history.push('/home')
            }, (e) => { setErrorMessage("Грешна парола или потребителско име")}
        )
    }
    let errorSpan = '';

    if(errorMessage) {
       errorSpan = <span className="form-error-span">{errorMessage}</span>
    }

    return (
        <section className="form-wrapper login-form-wrapper">
            <FormHeader title="Вход"/>

            <form className="form-container" onSubmit={handleSubmit}>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="username">Потребителско име:</label>
                    </div>
                    <input className="form-field-input"
                           type="text"
                           id="username"
                           name="username"
                           value={username}
                           onChange={e => setUsername(e.target.value)}/>
                </div>

                <div className="form-field-wrapper">
                    <div className="form-field-heading">
                        <label htmlFor="password">Парола:</label>
                    </div>
                    <input className="form-field-input"
                           type="password"
                           id="password"
                           name="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="form-error-div">
                    {errorSpan}
                </div>

                <div className="form-button-wrapper">
                    <input className="form-button" type="submit" value="ИЗПРАТИ"/>
                </div>

            </form>

        </section>
    )
}

export default Login;
