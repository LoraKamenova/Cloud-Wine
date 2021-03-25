import './Login.css'
import FormHeader from "../../Other/FormHeader/FormHeader";

const Login = () => {
    return (
        <div className="custom-section login-section">

            <div className="login-container">

                <div className="auth-form-wrapper login-form-wrapper">

                    <FormHeader title="Вход"/>

                    <form className="auth-form" action="" method="">

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="username">Потребителско име:</label>
                            </div>
                            <input className="auth-form-field-input" type="text" id="username" name="username"/>
                        </div>

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="password">Парола:</label>
                            </div>
                            <input className="auth-form-field-input" type="password" id="password" name="password"/>
                        </div>

                        <div className="auth-form-button-wrapper">
                            <button className="auth-form-button" type="submit">ИЗПРАТИ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
