import './Register.css'
import FormHeader from "../../Shared/FormHeader/FormHeader";

import {Component} from 'react';

import authenticate from "../../../utils/authenticate";
import UserContext from "../../../Context";

class Register extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: "",
            avatarUrl: "",
            errorMessage: "",
            errorMessage2: "",
        }
    }

    validate() {
        const {
            password,
            rePassword
        } = this.state;

        this.setState({errorMessage2: "", errorMessage: ""});

        if (password !== rePassword) {
            this.setState({errorMessage2: "Паролите не съвпадат"});
            return true;
        }

        return false;
    }


    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password,
            avatarUrl
        } = this.state

        const hasErrors = this.validate();

        if (hasErrors) {
            return;
        }

        await authenticate('http://localhost:5000/api/user/register', {
                username,
                password,
                avatarUrl
            }, (user) => {
                this.context.logIn(user)
                this.props.history.push('/home')
            }, (e) => { this.setState({errorMessage: "Потребителското име е заето"})}
        )
    }

    render() {
        const {
            username,
            avatarUrl,
            rePassword,
            password,
        } = this.state

        let errorSpan = '';
        if(this.state.errorMessage) {
            errorSpan = <span className="form-error-span">{this.state.errorMessage}</span>
        }

        let errorSpan2 = '';
        if(this.state.errorMessage2) {
            errorSpan2 = <span className="form-error-span">{this.state.errorMessage2}</span>
        }

        return (
            <section className="form-wrapper register-form-wrapper">
                <FormHeader title="Регистрация"/>
                <form className="form-container" onSubmit={this.handleSubmit}>

                    <div className="form-field-wrapper">
                        <div className="form-field-heading">
                            <label htmlFor="username">Потребителско име:*</label>
                        </div>
                        <input className="form-field-input"
                               type="text"
                               id="username"
                               name="username"
                               required
                               value={username}
                               onChange={(e) => this.onChange(e, 'username')}/>
                    </div>

                    <div className="form-field-wrapper">
                        <div className="form-field-heading">
                            <label htmlFor="password">Парола:*</label>
                        </div>
                        <input className="form-field-input"
                               type="password"
                               id="password"
                               name="password"
                               required
                               value={password}
                               onChange={(e) => this.onChange(e, 'password')}/>
                    </div>

                    <div className="form-field-wrapper">
                        <div className="form-field-heading">
                            <label htmlFor="rePassword">Повторете паролата:*</label>
                        </div>
                        <input className="form-field-input"
                               type="password"
                               id="rePassword"
                               name="rePassword"
                               required
                               value={rePassword}
                               onChange={(e) => this.onChange(e, 'rePassword')}/>
                    </div>

                    <div className="form-field-wrapper">
                        <div className="form-field-heading">
                            <label htmlFor="avatarUrl">URL профилна снимка:</label>
                        </div>
                        <input className="form-field-input"
                               type="avatarUrl"
                               id="avatarUrl"
                               name="avatarUrl"
                               value={avatarUrl}
                               onChange={(e) => this.onChange(e, 'avatarUrl')}/>
                    </div>

                    <span className="form-info-span">Полетата, отбелязани със (*) са задъжлителни</span>

                    <div className="form-error-div">
                        {errorSpan}{errorSpan2}
                    </div>

                    <div className="form-button-wrapper">
                        <input className="form-button auth-form-button" type="submit" value="ИЗПРАТИ"/>
                    </div>
                </form>
            </section>
        )
    }
}

export default Register;
