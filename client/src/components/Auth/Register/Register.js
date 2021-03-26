import './Register.css'
import { Component } from 'react';
import FormHeader from "../../Other/FormHeader/FormHeader";
import authenticate from "../../../utils/authenticate";
import UserContext from "../../../Context";

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }

    static contextType = UserContext;

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state

        await authenticate('http://localhost:5000/api/user/register', {
                username,
                password
            }, (user) => {
                this.context.logIn(user)
                this.props.history.push('/home')
            }, (e) => {
                console.log('Error', e)
            }
        )
    }

    render() {
        const {
            username,
            password,
            rePassword
        } = this.state

        return (
            <section className="custom-section register-section">

                <div className="register-container">

                    <div className="auth-form-wrapper register-form-wrapper">

                        <FormHeader title="Регистрация"/>

                        <form className="auth-form" onSubmit={this.handleSubmit}>

                            <div className="auth-form-field-wrapper">
                                <div className="auth-form-field-heading">
                                    <label htmlFor="username">Потребителско име:</label>
                                </div>
                                <input className="auth-form-field-input" type="text" id="username" name="username" value={username} onChange={(e) => this.onChange(e, 'username')}/>
                            </div>

                            {/*<div className="auth-form-field-wrapper">*/}
                            {/*    <div className="auth-form-field-heading">*/}
                            {/*        <label htmlFor="email">Имейл адрес:</label>*/}
                            {/*    </div>*/}
                            {/*    <input className="auth-form-field-input" type="email" id="email" name="email"/>*/}
                            {/*</div>*/}

                            <div className="auth-form-field-wrapper">
                                <div className="auth-form-field-heading">
                                    <label htmlFor="password">Парола:</label>
                                </div>
                                <input className="auth-form-field-input" type="password" id="password" name="password" value={password} onChange={(e) => this.onChange(e, 'password')}/>
                            </div>

                            <div className="auth-form-field-wrapper">
                                <div className="auth-form-field-heading">
                                    <label htmlFor="rePassword">Повторете паролата:</label>
                                </div>
                                <input className="auth-form-field-input" type="password" id="rePassword"
                                       name="rePassword" value={rePassword} onChange={(e) => this.onChange(e, 'rePassword')}/>
                            </div>

                            <div className="auth-form-button-wrapper">
                                <button className="auth-form-button" type="submit">ИЗПРАТИ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;
